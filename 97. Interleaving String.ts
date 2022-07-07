function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;

  const dp = Array(s1.length + 1)
    .fill(null)
    .map(_ => Array(s2.length + 1).fill(false)) as boolean[][];

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (i === 0 && j === 0) dp[i][j] = true;
      else if (i === 0) {
        dp[i][j] = s2[j - 1] === s3[i + j - 1] ? dp[i][j - 1] : false;
      } else if (j === 0) {
        dp[i][j] = s1[i - 1] === s3[i + j - 1] ? dp[i - 1][j] : false;
      } else {
        if (s1[i - 1] === s3[i + j - 1]) {
          dp[i][j] = dp[i - 1][j];
        }
        if (!dp[i][j] && s2[j - 1] === s3[i + j - 1]) {
          dp[i][j] = dp[i][j - 1];
        }
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
}

function isInterleave___slow(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;
  if ((s1 === '' && s2 === s3) || (s2 === '' && s1 === s3)) return true;
  if ((s1 === '' && s2 !== s3) || (s2 === '' && s1 !== s3)) return false;
  if (s3 === '' && s1.length + s2.length !== 0) return false;
  if (s3[0] !== s1[0] && s3[0] !== s2[0]) return false;

  let v1 = false;
  let v2 = false;

  if (s3[0] === s1[0]) {
    v1 = isInterleave(s1.slice(1), s2, s3.slice(1));
  }
  if (s3[0] === s2[0]) {
    v2 = isInterleave(s1, s2.slice(1), s3.slice(1));
  }

  return v1 || v2;
}

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')); //true
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')); // false
console.log(isInterleave('', '', '')); // true
console.log(
  isInterleave(
    'accbaabaaabbcbaacbababacaababbcbabaababcaabbbbbcacbaa',
    'cabaabcbabcbaaaacababccbbccaaabaacbbaaabccacabaaccbbcbcb',
    'accbcaaabbaabaaabbcbcbabacbacbababaacaaaaacbabaabbcbccbbabbccaaaaabaabcabbcaabaaabbcbcbbbcacabaaacccbbcbbaacb',
  ),
);
