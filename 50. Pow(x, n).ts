function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  const pow = Math.abs(n);
  const result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
  return n > 0 ? result : 1 / result;
}

console.log(myPow(2.0, 10)); // 1024.00000
console.log(myPow(2.1, 3)); // 9.26100
console.log(myPow(2.0, -2)); // 0.25
console.log(myPow(34.00515, -3)); // 3e-05
