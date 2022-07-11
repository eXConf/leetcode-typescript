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

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result = [] as number[];
  const q = [root];

  while(q.length !== 0) {
      let size = q.length;
      for (let i = 0; i < size; i++) {
          let n = q.shift()!;
          if (i === size - 1) result.push(n.val);
          if (n.left) q.push(n.left);
          if (n.right) q.push(n.right);
      }
  }

  return result;
}
