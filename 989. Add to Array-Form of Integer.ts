function addToArrayForm(num: number[], k: number): number[] {
  if (k === 0) return num;

  const num1 = num.reverse();
  const num2 = <number[]>[];

  while (k > 0) {
    num2.push(k % 10);
    k = Math.trunc(k / 10);
  }

  const len = Math.max(num1.length, num2.length);
  const result = Array(len + 1).fill(0);

  for (let i = 0; i < len; i++) {
    const sum = (num1[i] || 0) + (num2[i] || 0) + result[i];

    if (sum < 10) result[i] = sum;
    else {
      result[i] = sum % 10;
      result[i + 1] = 1;
    }
  }

  if (result[len] === 0) result.pop();

  return result.reverse();
}

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1, 2, 3, 4]
console.log(addToArrayForm([2, 7, 4], 181)); // [4, 5, 5]
console.log(addToArrayForm([2, 1, 5], 806)); // [1, 0, 2, 1]
