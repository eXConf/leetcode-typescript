class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  let smallerHead = null as ListNode | null;
  let biggerHead = null as ListNode | null;
  let smallerCurrent = smallerHead;
  let biggerCurrent = biggerHead;

  while (head) {
    if (head.val < x) {
      if (!smallerHead) {
        smallerHead = head;
        smallerCurrent = smallerHead;
      } else {
        smallerCurrent!.next = head;
        smallerCurrent = smallerCurrent!.next;
      }
    } else {
      if (!biggerHead) {
        biggerHead = head;
        biggerCurrent = biggerHead;
      } else {
        biggerCurrent!.next = head;
        biggerCurrent = biggerCurrent!.next;
      }
    }
    head = head.next;
  }

  if (biggerCurrent) biggerCurrent.next = null;

  if (smallerHead && smallerCurrent) {
    smallerCurrent.next = biggerHead;
    return smallerHead;
  } else {
    return biggerHead;
  }
}
