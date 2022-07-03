function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) return nums.length;

  let lastDiff = nums[1] - nums[0];
  let count = lastDiff !== 0 ? 2 : 1;

  for (let i = 2; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if ((diff > 0 && lastDiff <= 0) || (diff < 0 && lastDiff >= 0)) {
      lastDiff = diff;
      count++;
    }
  }

  return count;
}

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5])); // 6
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])); // 7
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 2
