class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  let list1Start = left > 1 ? head : null;
  let list1End = left > 1 ? head : null;
  let list2Start = null as ListNode | null;
  let list2End = null as ListNode | null;
  let list3Start = null as ListNode | null;
  let current = head;
  let counter = 1;

  while (current) {
    const next = current.next;
    if (counter < left) {
      list1End = current;
    } else if (counter === right + 1) {
      list3Start = current;
      break;
    } else {
      if (!list2End) {
        list2End = current;
        list2Start = current;
      } else {
        const node = current;
        node.next = list2Start;
        list2Start = node;
      }
    }
    current = next;
    counter++;
  }

  if (list2End) {
    if (list3Start) {
      list2End.next = list3Start;
    } else {
      list2End.next = null;
    }
  }

  if (list1End) {
    list1End.next = list2Start;
  } else {
    list1Start = list2Start;
  }

  counter = 0;
  current = list1Start;
  while (counter < 10 && current) {
    console.log(current.val);
    current = current.next;
    counter++;
  }

  return list1Start;
}
