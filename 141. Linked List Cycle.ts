class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle__mod(head: ListNode | null): boolean {
  const first = head;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = first;
    curr = next;
    if (curr === first) return true;
  }
  return false;
}

function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  while (fast && fast.next && slow) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
}
