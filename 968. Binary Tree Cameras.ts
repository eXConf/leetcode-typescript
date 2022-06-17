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

function minCameraCover(root: TreeNode | null): number {
  const covered = new Set<TreeNode | null>();
  covered.add(null);

  function dfs(node: TreeNode | null, parent: TreeNode | null): void {
    if (node !== null) {
      dfs(node.left, node);
      dfs(node.right, node);

      if (
        (parent === null && !covered.has(node)) ||
        !covered.has(node.left) ||
        !covered.has(node.right)
      ) {
        total++;
        covered.add(node);
        covered.add(node.left);
        covered.add(node.right);
        covered.add(parent);
      }
    }
  }

  let total = 0;
  dfs(root, null);

  return total;
}

// Test cases:
// [0,0,null,0,0]
// [0,0,null,0,null,0,null,null,0]
// [0,0,0]
// [0,0,0,null,null,null,0,null,0]
