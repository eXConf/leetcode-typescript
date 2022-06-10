export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  let needle = '';

  while (head) {
    needle += head.val;
    head = head.next;
  }

  function dp(root: TreeNode | null, haystack: string): boolean {
    if (root === null) return false;

    haystack += root?.val;

    if (haystack.includes(needle)) return true;

    const leftResponse = dp(root.left, haystack);
    const rightResponse = dp(root.right, haystack);

    return leftResponse || rightResponse;
  }

  return dp(root, '');
}
