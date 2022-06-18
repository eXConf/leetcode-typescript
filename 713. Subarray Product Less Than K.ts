function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let prod = 1;
  let ans = 0;
  let left = 0;
  let right = 0;

  for (right; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k) prod /= nums[left++];
    ans += right - left + 1;
  }

  return ans;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // 0
