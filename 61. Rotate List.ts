import { ListNode, makeListNode } from './helper';

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;

  const stack = [] as (ListNode | null)[];

  while (head) {
    stack.push(head);
    head = head.next;
  }

  stack[stack.length - 1]!.next = stack[0];
  let i = stack.length - 1;
  const offset = k % stack.length;
  i -= offset;
  stack[i]!.next = null;

  if (i + 1 === stack.length) return stack[0];

  return stack[i + 1];
}

console.log(rotateRight(makeListNode([1, 2, 3, 4, 5]), 2)); // [4,5,1,2,3]
console.log(rotateRight(makeListNode([0, 1, 2]), 4)); // [2,0,1]
