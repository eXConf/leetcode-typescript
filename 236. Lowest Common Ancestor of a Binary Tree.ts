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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let ans = null as TreeNode | null;
  function dp(root: TreeNode | null): boolean {
    if (!root) return false;

    const left = dp(root.left) ? 1 : 0;
    const right = dp(root.right) ? 1 : 0;
    const mid = root === p || root === q ? 1 : 0;

    const sum = left + right + mid;
    if (sum >= 2) ans = root;
    return sum > 0;
  }

  dp(root);
  return ans;
}
