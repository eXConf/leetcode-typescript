function longestPalindrome(s: string, offset = 1): string {
  const memo = new Map<string, boolean>();
  if (isPalindrome(s, memo)) return s;

  const len = s.length;
  let longest = '';

  for (let i = 0; i < len; i++) {
    let left = i;
    let right = i + offset;
    let substring = s.substring(left, right);

    while (isPalindrome(substring, memo)) {
      if (substring.length > longest.length) longest = substring;

      left--;
      right++;

      if (left > 0 || right < len) {
        substring = s.substring(left, right);
      } else {
        substring = 'ab';
      }
    }
  }

  if (offset === 1) {
    const longest2 = longestPalindrome(s, 2);

    return longest.length > longest2.length ? longest : longest2;
  }

  return longest;
}

function isPalindrome(s: string, memo: Map<string, boolean>): boolean {
  const memoized = memo.get(s);
  if (memoized !== undefined) return memoized;

  const result = s === s.split('').reverse().join('');
  memo.set(s, result);

  return result;
}
console.log(longestPalindrome('babad')); // 'bab'
console.log(longestPalindrome('cbbd')); // 'bb'
console.log(longestPalindrome('cbbjjjmotorrotomzxcsasdsssd')); // 'motorrotom'
console.log(
  longestPalindrome(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  ),
); //
