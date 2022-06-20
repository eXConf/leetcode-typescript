export class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node | null): Node | null {
  const stack = <(Node | null)[]>[];
  const map = new Map<Node, Node>();

  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }

  const newList = Array(stack.length)
    .fill(null)
    .map(_ => new Node());

  for (let i = 0; i < stack.length; i++) {
    const original = stack[i]!;
    const copied = newList[i]!;

    copied.val = original?.val;
    copied.next = newList[i + 1] || null;

    if (original.random !== null) {
      const idx = stack.indexOf(original.random);
      copied.random = newList[idx];
    }
  }
  return newList[0];
}
