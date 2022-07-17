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

function hasPathSum(
  root: TreeNode | null,
  targetSum: number,
  sum = 0,
): boolean {
  if (!root) return false;
  if (!root.left && !root.right) {
    if (sum + root.val === targetSum) return true;
    else return false;
  }

  const leftHasPaathSum = hasPathSum(root.left, targetSum, sum + root.val);
  if (leftHasPaathSum) return true;

  return hasPathSum(root.right, targetSum, sum + root.val);
}
