function nextGreaterElements(nums: number[]): number[] {
  if (nums.length === 1) return [-1];

  const result = Array(nums.length).fill(-1);
  const stack = <number[]>[0];
  let i = 1;
  let currentRound = 1;

  while (currentRound < 3) {
    const current = nums[i];
    while (stack.length > 0 && current > nums[stack[stack.length - 1]]) {
      result[stack[stack.length - 1]] = current;
      stack.pop();
    }

    if (currentRound === 1) stack.push(i);
    i++;

    if (i === nums.length) {
      i = 0;
      currentRound++;
    }
  }

  return result;
}

console.log(nextGreaterElements([1, 2, 1])); // [2, -1, 2]
console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2, 3, 4, -1, 4]
console.log(nextGreaterElements([1, 1, 1, 4, 3])); // [ 4, 4, 4, -1, 4 ]
console.log(nextGreaterElements([1])); // [ -1 ]
console.log(nextGreaterElements([1, 1])); // [ -1, -1 ]
