function minOperations(nums: number[], x: number): number {
  const sumOfArray = nums.reduce((prev, curr) => prev + curr);

  if (sumOfArray < x) return -1;

  const difference = sumOfArray - x;
  let left = 0;
  let right = 0;
  let currentSum = nums[0];
  let solutions = <number[]>[];

  while (right < nums.length) {
    if (currentSum < difference) {
      right++;
      currentSum += nums[right];
      continue;
    }
    if (currentSum > difference) {
      currentSum -= nums[left];
      left++;
      continue;
    }
    if (currentSum === difference) {
      solutions.push(nums.length - (right + 1 - left));
      left++;
      right = left;
      currentSum = nums[left];
    }
  }

  if (solutions.length === 0) return -1;

  return Math.min(...solutions);
}

console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
console.log(minOperations([5, 6, 7, 8, 9], 4)); // -1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); // 5
console.log(minOperations([1, 1], 3)); // -1
console.log(
  minOperations(
    [
      6016, 5483, 541, 4325, 8149, 3515, 7865, 2209, 9623, 9763, 4052, 6540,
      2123, 2074, 765, 7520, 4941, 5290, 5868, 6150, 6006, 6077, 2856, 7826,
      9119,
    ],
    31841,
  ),
); // 6
console.log(
  minOperations(
    [
      1241, 8769, 9151, 3211, 2314, 8007, 3713, 5835, 2176, 8227, 5251, 9229,
      904, 1899, 5513, 7878, 8663, 3804, 2685, 3501, 1204, 9742, 2578, 8849,
      1120, 4687, 5902, 9929, 6769, 8171, 5150, 1343, 9619, 3973, 3273, 6427,
      47, 8701, 2741, 7402, 1412, 2223, 8152, 805, 6726, 9128, 2794, 7137, 6725,
      4279, 7200, 5582, 9583, 7443, 6573, 7221, 1423, 4859, 2608, 3772, 7437,
      2581, 975, 3893, 9172, 3, 3113, 2978, 9300, 6029, 4958, 229, 4630, 653,
      1421, 5512, 5392, 7287, 8643, 4495, 2640, 8047, 7268, 3878, 6010, 8070,
      7560, 8931, 76, 6502, 5952, 4871, 5986, 4935, 3015, 8263, 7497, 8153, 384,
      1136,
    ],
    894887480,
  ),
); // -1
