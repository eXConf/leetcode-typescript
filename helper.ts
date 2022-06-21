export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function makeListNode(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  let node = new ListNode();

  while (arr.length > 0) {
    node.val = arr.pop()!;

    if (arr.length > 0) {
      const newNode = new ListNode();
      newNode.next = node;
      node = newNode;
    }
  }

  return node;
}

export function printListNode(node: ListNode | null) {
  if (node === null) console.log([]);

  const arr = <number[]>[];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  console.log(arr);
}
