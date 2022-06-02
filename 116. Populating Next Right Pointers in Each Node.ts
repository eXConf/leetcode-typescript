export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export function connect(root: Node | null): Node | null {
  const q = [root, null];

  while (q.length > 0) {
    const el = q.shift() as (Node | null);

    if (el === null) continue;

    el.next = q[0];

    q.push(el.left, el.right);

    if (el.next === null) q.push(null);
  }

  return root;
}
