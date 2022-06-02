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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null,
): TreeNode | null {
  if (!root1) return root2;

  const q = [[root1, root2]];

  while (q.length > 0) {
    const [node1, node2] = q.pop()!;

    if (node1 != null && node2 != null) {
      node1.val = (node1?.val || 0) + (node2?.val || 0);

      if (!node1.left && node2.left) {
        node1.left = new TreeNode();
      }
      if (!node1.right && node2.right) {
        node1.right = new TreeNode();
      }

      if (!node1.left && !node1.right) continue;

      q.push([node1.left, node2.left], [node1.right, node2.right]);
    }
  }

  return root1;
}
