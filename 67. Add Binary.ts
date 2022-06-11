function addBinary(a: string, b: string): string {
  if (a.length < b.length) a = a.padStart(b.length, '0');
  if (b.length < a.length) b = b.padStart(a.length, '0');

  const bitsA = a.split('').reverse();
  const bitsB = b.split('').reverse();
  const result = Array(a.length + 1).fill(0);

  for (let i = 0; i < a.length; i++) {
    const sum = parseInt(bitsA[i]) + parseInt(bitsB[i]) + result[i];
    if (sum < 2) result[i] = sum;
    else if (sum === 2) {
      result[i] = 0;
      result[i + 1] = 1;
    }
    else {
      result[i] = 1;
      result[i + 1] = 1;
    }
  }

  if (result[result.length - 1] === 0) result.pop();

  return result.reverse().join('');
}

console.log(addBinary('11', '1')); // '100'
console.log(addBinary('1010', '1011')); // '10101'
console.log(addBinary('1', '111')); // '1000'
console.log(addBinary('1111', '1111')); // '11110'