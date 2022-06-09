function plusOne(digits: number[]): number[] {
  digits[digits.length - 1] += 1;

  while (digits.includes(10)) {
    let indexOfTen: number = digits.lastIndexOf(10);
    digits[indexOfTen] = 0;

    if (indexOfTen === 0) {
      digits.unshift(1);
    } else {
      digits[indexOfTen - 1] += 1;
    }
  }

  return digits;
}

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
