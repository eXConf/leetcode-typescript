function combine(n: number, k: number): number[][] {
  const solutions: number[][] = [];

  function backtrack(start: number, comb: number[]): void {
    if (comb.length === k) {
      solutions.push(comb);
      return;
    }

    for (let i = start; i <= n; i++) {
      comb.push(i);
      backtrack(i + 1, [...comb]);
      comb.pop();
    }
  }

  backtrack(1, []);
  return solutions;
}

console.log(combine(4, 2));
[
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
];