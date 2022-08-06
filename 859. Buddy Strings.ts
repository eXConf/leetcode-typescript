function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (s.indexOf(char) !== s.lastIndexOf(char)) return true;
    }
    return false;
  }

  let diffs = [] as number[];

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = goal[i];

    if (a !== b) diffs.push(i);
  }

  if (diffs.length !== 2) return false;

  const idx1 = diffs[0];
  const idx2 = diffs[1];

  if (s[idx1] !== goal[idx2] || s[idx2] !== goal[idx1]) return false;

  return true;
}
