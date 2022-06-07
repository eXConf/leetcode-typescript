function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) return i;
      for (let y = 1; y < needle.length; y++) {
        if (haystack[i + y] !== needle[y]) {
          break;
        }
        if (y === needle.length - 1) return i;
      }
    }
  }
  return -1;
}

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
