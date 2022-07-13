class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result = [] as number[][];
  const q = [root];

  while (q.length > 0) {
    const size = q.length;
    const vals = [] as number[];

    for (let i = 0; i < size; i++) {
      const node = q.shift()!;

      vals.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    result.push(vals);
  }

  return result;
}
