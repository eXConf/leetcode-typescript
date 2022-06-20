export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head) return;

  const stack = <(ListNode | null)[]>[];
  let current: ListNode | null = head;

  while (current) {
    stack.push(current);
    current = current.next;
  }

  current = head;
  const size = stack.length;

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      if (current) {
        current.next = stack.shift()!;
      }
    } else {
      if (current) {
        current.next = stack.pop()!;
      }
    }

    if (current?.next !== undefined) {
      current = current?.next;
    }
  }
  if (current) {
    current.next = null;
  }
}
