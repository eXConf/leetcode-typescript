class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let last = new ListNode(head?.val);

  while (head) {
    head = head.next;
    if (!head) break;
    let current = new ListNode(head?.val, last);
    last = current;
  }

  return last;
}
