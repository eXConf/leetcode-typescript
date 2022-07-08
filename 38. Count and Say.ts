function countAndSay(n: number): string {
  let number = '1';

  for (let i = 1; i < n; i++) {
    let count = 1;
    let currentChar = number[0];
    let newNumber = '';

    for (let j = 1; j < number.length; j++) {
      if (number[j] === currentChar) {
        count++;
      } else {
        newNumber += count;
        newNumber += currentChar;

        currentChar = number[j];
        count = 1;
      }
    }
    newNumber += count;
    newNumber += currentChar;

    number = newNumber;
  }
  return number;
}

console.log(countAndSay(1)); // '1'
console.log(countAndSay(4)); // '1211'
