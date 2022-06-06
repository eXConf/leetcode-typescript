function rob(nums: number[], memo: Map<string, number> = new Map()): number {
  const id = nums.join('x');
  if (memo.has(id)) return memo.get(id)!;

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);

  const first = nums[0] + rob(nums.slice(2), memo);
  const second = nums[1] + rob(nums.slice(3), memo);

  const result = Math.max(first, second);
  memo.set(id, result);
  return result;
}

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(
  rob([
    2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1,
    2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1,
    2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1,
  ]),
); // 166
