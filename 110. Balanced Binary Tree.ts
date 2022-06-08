export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isBalanced(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null): number | null {
    if (root === null) return 0;

    const dfsLeft = dfs(root.left);
    const dfsRight = dfs(root.right);

    if (dfsLeft === null || dfsRight === null) return null;

    if (Math.abs(dfsLeft - dfsRight) > 1) return null;
    return Math.max(dfsLeft, dfsRight) + 1;
  }

  return dfs(root) === null ? false : true;
}

const testNode = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(8)),
  new TreeNode(20, new TreeNode(15), new TreeNode(7, new TreeNode(10))),
);

console.log(isBalanced(testNode));
