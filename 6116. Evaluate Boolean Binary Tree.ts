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

function evaluateTree(root: TreeNode | null): boolean {
  if (root && !root.left && !root.right) return !!root.val;
  if (root) {
    // 2 = OR
    if (root.val === 2) {
      return evaluateTree(root.left) || evaluateTree(root.right);
    }
    // 3 = AND
    if (root.val === 3) {
      return evaluateTree(root.left) && evaluateTree(root.right);
    }
  }
  return false;
}
