function jump(nums: number[]): number {
  let position = nums.length - 1;
  let jumps = 0;

  while (position !== 0) {
    for (let i = 0; i < position; i++) {
      if (nums[i] >= position - i) {
        position = i;
        jumps += 1;
        break;
      }
    }
  }
  return jumps;
}

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([9, 8, 2, 2, 0, 2, 2, 0, 4, 1, 5, 7, 9, 6, 6, 0, 6, 5, 0, 5])); // 3
