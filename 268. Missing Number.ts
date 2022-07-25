function missingNumber(nums: number[]): number {
  let i = 0;
  let have = 0;
  let shouldHave = 0;
  while (i < nums.length) {
    have += nums[i];
    shouldHave += i;
    i++;
  }
  shouldHave += i;
  return shouldHave - have;
}
