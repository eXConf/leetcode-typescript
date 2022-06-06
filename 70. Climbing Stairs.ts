function climbStairs(n: number, memo: Map<number, number> = new Map()): number {
  if (memo.has(n)) return memo.get(n)!;

  if (n === 0) return 1;
  if (n < 0) return 0;

  const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo.set(n, result);
  return result;
}

console.log(climbStairs(2)); // 2;
console.log(climbStairs(3)); // 3;
console.log(climbStairs(10)); // 89;
console.log(climbStairs(44)); // 1134903170;
