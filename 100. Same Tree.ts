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

function isSameTree(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  const q1 = [root1];
  const q2 = [root2];

  while (q1.length > 0 || q2.length > 0) {
    const size1 = q1.length;
    const size2 = q2.length;

    if (size1 !== size2) return false;

    for (let i = 0; i < size1; i++) {
      const el1 = q1.shift()!;
      const el2 = q2.shift()!;

      if (el1.val !== el2.val) return false;
      if (
        Boolean(el1.left) !== Boolean(el2.left) ||
        Boolean(el1.right) !== Boolean(el2.right)
      )
        return false;

      el1.left && q1.push(el1.left);
      el2.left && q2.push(el2.left);
      el1.right && q1.push(el1.right);
      el2.right && q2.push(el2.right);
    }
  }

  return true;
}
