export class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: Node | null): number[][] {
  if (root === null) return [];

  const results = <number[][]>[];
  const q = [root];

  while (q.length > 0) {
    const size = q.length;
    const temp = <number[]>[];

    for (let i = 0; i < size; i++) {
      const node = q.shift()!;
      temp.push(node?.val);

      for (let child of node.children) {
        q.push(child);
      }
    }

    results.push(temp);
  }

  return results;
}
