function generate(numRows: number): number[][] {
  const arr = [[1]];

  for (let i = 1; i < numRows; i++) {
    const current = Array(i + 1);
    current[0] = 1;
    current[current.length - 1] = 1;

    const prev = arr[arr.length - 1];
    for (let j = 1; j <= prev.length - 1; j++) {
      current[j] = prev[j - 1] + prev[j];
    }
    arr.push(current);
  }

  return arr;
}

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]