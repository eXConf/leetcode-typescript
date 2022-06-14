function minDistance(word1: string, word2: string): number {
  const memo = new Map<string, number>();

  function dp(word1: string, word2: string): number {
    const key = word1 + '|' + word2;
    const memoized = memo.get(key);

    if (memoized !== undefined) return memoized;

    if (word1.length === 0) return word2.length;
    if (word2.length === 0) return word1.length;

    let minCost = Number.MAX_SAFE_INTEGER;

    if (word1[0] === word2[0]) {
      minCost = dp(word1.substring(1), word2.substring(1));
    } else {
      minCost = Math.min(dp(word1.substring(1), word2) + 1, minCost);
      minCost = Math.min(dp(word1, word2.substring(1)) + 1, minCost);
    }

    memo.set(key, minCost);
    return minCost;
  }
  return dp(word1, word2);
}

console.log(minDistance('sea', 'eat')); // 2
console.log(minDistance('leetcode', 'etco')); // 4
console.log(minDistance('mart', 'karma')); // 5
console.log(minDistance('park', 'spake')); // 3
