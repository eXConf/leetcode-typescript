function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0';

  const arr1 = num1.split('').reverse();
  const arr2 = num2.split('').reverse();

  const answer = Array(num1.length + num2.length).fill(0);

  for (let i = 0; i < arr1.length; i++) {
    const digit1 = parseInt(arr1[i]);
    for (let j = 0; j < arr2.length; j++) {
      const digit2 = parseInt(arr2[j]);
      const position = i + j;
      const temp = answer[position];

      const product = digit1 * digit2 + temp;
      answer[position] = product % 10;
      answer[position + 1] += Math.floor(product / 10);
    }
  }

  if (answer[answer.length - 1] === 0) answer.pop();

  return answer.reverse().join('');
}

console.log(multiply('0', '3')); // 0
console.log(multiply('2', '3')); // 6
console.log(multiply('22', '14')); // 308
console.log(multiply('123', '456')); // 56088
