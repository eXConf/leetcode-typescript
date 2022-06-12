function lengthOfLastWord(s: string): number {
  const space = /\s/;
  let end: number | null = null;
  let start: number | null = null;

  for (let i = s.length - 1; i >= 0; i--) {
    if (!space.test(s[i]) && end === null) end = i + 1;
    if (space.test(s[i]) && end !== null) {
      start = i + 1;
      return end - start;
    }
  }

  start = 0;
  return (end || s.length) - start;
}

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
console.log(lengthOfLastWord('luffy is still joyboy')); // 6
console.log(lengthOfLastWord('HelloWorld')); // 10
console.log(lengthOfLastWord('H ')); // 1
console.log(lengthOfLastWord('    abc')); // 3
