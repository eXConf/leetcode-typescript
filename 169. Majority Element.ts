function majorityElement(nums: number[]): number {
  const goal = Math.floor(nums.length / 2);
  let countFirst = 0;
  let countSecond = 0;
  let secondVal: number;

  for (let num of nums) {
    if (num === nums[0]) countFirst++;
    else {
      countSecond++;
      secondVal = num;
    }
  }

  return countFirst > countSecond ? nums[0] : secondVal!;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
