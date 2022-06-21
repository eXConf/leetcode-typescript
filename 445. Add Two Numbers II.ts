import { makeListNode, printListNode } from './helper';

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const stack1 = <number[]>[];
  const stack2 = <number[]>[];

  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val);
    }
    if (l2) {
      stack2.push(l2.val);
    }

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  let tmp = 0;
  const digits = <number[]>[];

  while (stack1.length > 0 || stack2.length > 0) {
    let digit = (stack1.pop() || 0) + (stack2.pop() || 0) + tmp;
    tmp = 0;

    if (digit > 9) {
      digit = digit - 10;
      tmp = 1;
    }
    digits.push(digit);

    if (stack1.length === 0 && stack2.length === 0 && tmp > 0) {
      digits.push(tmp);
    }
  }

  let node = new ListNode();

  while (digits.length > 0) {
    const digit = digits.shift()!;
    node.val = digit;
    if (digits.length > 0) {
      const newNode = new ListNode();
      newNode.next = node;
      node = newNode;
    }
  }

  return node;
}

printListNode(
  addTwoNumbers(makeListNode([7, 2, 4, 3]), makeListNode([5, 6, 4])),
); // [ 7, 8, 0, 7 ]
printListNode(addTwoNumbers(makeListNode([5]), makeListNode([5]))); // [ 1, 0 ]
printListNode(addTwoNumbers(makeListNode([0]), makeListNode([0]))); // [ 0 ]
