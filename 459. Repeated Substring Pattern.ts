function repeatedSubstringPattern(s: string): boolean {
  const halfLength = Math.floor(s.length);
  for (let i = 1; i < halfLength; i++) {
    const substr = s.substring(0, i);

    if (s.length % substr.length === 0) {
      const applied = s.split(substr).join('');

      if (applied.length === 0) return true;
    }
  }

  return false;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true