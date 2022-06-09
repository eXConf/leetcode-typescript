function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    const num = parseInt(token);
    if (num >= 0 || num < 0) {
      stack.push(num);
    } else {
      const b = stack.pop()!;
      const a = stack.pop()!;

      if (token === '+') {
        stack.push(a + b);
        continue;
      }
      if (token === '-') {
        stack.push(a - b);
        continue;
      }
      if (token === '*') {
        stack.push(a * b);
        continue;
      }
      if (token === '/') {
        stack.push(Math.trunc(a / b));
        continue;
      }
    }
  }

  return stack[0];
}

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['3'])); // 3
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(
  evalRPN([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ]),
); // 22
