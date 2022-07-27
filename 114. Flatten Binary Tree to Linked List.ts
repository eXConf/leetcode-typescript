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

function flatten(root: TreeNode | null): void {
  if (!root) return;

  const nodes = [] as TreeNode[];
  const q = [root];

  while (q.length > 0) {
    const el = q.pop()!;
    nodes.push(el);

    el.right && q.push(el.right);
    el.left && q.push(el.left);
  }

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1] || null;
  }
}
