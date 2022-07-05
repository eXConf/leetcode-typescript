function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;

    let currentNum = num;
    let currentLongest = 1;

    while (set.has(currentNum + 1)) {
      currentNum++;
      currentLongest++;
    }
    longest = Math.max(longest, currentLongest);
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
