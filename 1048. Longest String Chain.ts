function longestStrChain(words: string[]): number {
  const memo = new Map<string, number>();

  function dp(words: string[], source: string): number {
    if (words.length === 1) return 1;

    const memoized = memo.get(source);

    if (memoized !== undefined) return memoized;

    const predIdx = words.indexOf(source);

    if (predIdx === -1) return 0;

    const variants = <number[]>[];

    for (let i = 0; i < source.length; i++) {
      variants.push(dp(words, source.slice(0, i) + source.slice(i + 1)) + 1);
    }

    const max = Math.max(...variants);
    memo.set(source, max);

    return max;
  }

  const variants = <number[]>[];

  for (let i = words.length - 1; i >= 0; i--) {
    variants.push(dp(words, words[i]));
  }

  return Math.max(...variants);
}

console.log(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])); // 4
console.log(longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])); // 5
console.log(longestStrChain(['abcd', 'dbqca'])); // 1
