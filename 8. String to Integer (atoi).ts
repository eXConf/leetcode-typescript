function myAtoi(s: string): number {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  const regexp = /\d/;
  let isEmpty = true;
  let sign = 1;
  let n = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];

    if (isEmpty) {
      if (char === ' ') continue;
      else if (char === '-') sign = -1;
      else if (regexp.test(char)) n = char.charCodeAt(0) - 48;
      else if (char !== '+') return 0;
      isEmpty = false;
    } else {
      if (regexp.test(char)) {
        const digit = char.charCodeAt(0) - 48;
        n = n * 10 + digit;
        if (sign * n > INT_MAX) return INT_MAX;
        if (sign * n < INT_MIN) return INT_MIN;
      } else {
        break;
      }
    }
  }
  return sign * n;
}

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
