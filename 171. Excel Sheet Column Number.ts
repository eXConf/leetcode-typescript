function titleToNumber(columnTitle: string): number {
  const offset = 64;
  const n = columnTitle.length;
  let sum = 0;

  for (let i = n - 1; i >= 0; i--) {
    const base = columnTitle.charCodeAt(i) - offset;
    const pow = n - 1 - i;
    sum += base * 26 ** pow;
  }
  return sum;
}

console.log(titleToNumber('A')); // 1
console.log(titleToNumber('AB')); // 28
console.log(titleToNumber('ZY')); // 701
console.log(titleToNumber('AAA')); // 703
console.log(titleToNumber('BAA')); // 1379
