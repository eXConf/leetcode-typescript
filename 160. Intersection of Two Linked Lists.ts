export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
}

function getIntersectionNode__Slow(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let currentA = headA;
  let currentB = headB;

  while (currentA) {
    while (currentB) {
      if (currentB === currentA) return currentA;
      currentB = currentB.next;
    }
    currentB = headB;
    currentA = currentA.next;
  }
  return null;
}