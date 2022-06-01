function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}

function runningSum2(nums: number[]): number[] {
  nums.forEach((_, index) => (nums[index] += index > 0 ? nums[index - 1] : 0));
  return nums;
}

function runningSum1(nums: number[]): number[] {
  return nums.map((_, index) => {
    return nums.reduce((prev, curr, idx) =>
      idx <= index ? prev + curr : prev,
    );
  });
}

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]

console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]

console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
