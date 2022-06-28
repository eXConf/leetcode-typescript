function minDeletions(s: string): number {
  const counts = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  counts.sort((a, b) => b - a);

  const set = new Set<number>();
  set.add(counts[0]);

  let deletions = 0;
  for (let i = 1; i < counts.length; i++) {
    let count = counts[i];
    if (count === 0) break;
    if (!set.has(count)) set.add(count);
    else {
      while (set.has(count) && count > 0) {
        count--;
        deletions++;
      }
      set.add(count);
    }
  }
  return deletions;
}

console.log(minDeletions('aab')); // 0
console.log(minDeletions('aaabbbcc')); // 2
console.log(minDeletions('ceabaacb')); // 2
