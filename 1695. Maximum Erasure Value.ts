function maximumUniqueSubarray(nums: number[]): number {
  let maxScore = nums[0];
  let currentScore = maxScore;
  let left = 0;
  let right = left + 1;

  while (right < nums.length) {
    let tempSum = 0;

    for (let i = left; i < right; i++) {
      tempSum += nums[i];
      if (nums[i] === nums[right]) {
        left = i + 1;
        currentScore -= tempSum;
        break;
      }
    }

    currentScore += nums[right];
    right++;

    if (currentScore > maxScore) maxScore = currentScore;
  }

  return maxScore;
}

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])); // 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); // 8
console.log(maximumUniqueSubarray([5, 5, 5, 5, 5])); // 5
console.log(maximumUniqueSubarray([6])); // 6
console.log(
  maximumUniqueSubarray([
    187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411,
    459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610,
    31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670,
    476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434,
  ]),
); // 16911
