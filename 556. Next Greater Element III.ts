function nextGreaterElement(n: number): number {
  const digits = <number[]>[];

  while (n > 0) {
    digits.push(n % 10);
    n = Math.trunc(n / 10);
  }

  digits.reverse();

  let index = -1;

  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] > digits[i - 1]) {
      index = i - 1;
      break;
    }
  }

  if (index === -1) return -1;

  const digitToSwap = digits[index];
  const freeDigits = digits.splice(index, digits.length - index);
  freeDigits.sort((a, b) => a - b);

  for (let i = 0; i < freeDigits.length; i++) {
    if (freeDigits[i] > digitToSwap) {
      digits.push(freeDigits[i]);
      freeDigits.splice(i, 1);
      break;
    }
  }

  const allDigits = Array().concat(digits, freeDigits);

  return digitsToNumber(allDigits);
}

function digitsToNumber(digits: number[]): number {
  let result = 0;

  for (let digit of digits) {
    result = result * 10 + digit;
  }

  return result < 2 ** 31 ? result : -1;
}

console.log(nextGreaterElement(7)); // -1
console.log(nextGreaterElement(12)); // 21
console.log(nextGreaterElement(21)); // -1
console.log(nextGreaterElement(314)); // 341
console.log(nextGreaterElement(1321)); // 2113
console.log(nextGreaterElement(2147483486)); // -1
