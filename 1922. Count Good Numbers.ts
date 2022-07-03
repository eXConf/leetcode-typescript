function countGoodNumbers(n: number): number {
  const mod = BigInt(1000000007);
  const odds = modular_pow(BigInt(4), BigInt(Math.floor(n / 2)), mod);
  const evens = modular_pow(BigInt(5), BigInt(Math.ceil(n / 2)), mod);
  return Number((odds * evens) % mod);
}

function modular_pow(base: bigint, exponent: bigint, modulus: bigint) {
  if (modulus === 1n) return 0n;
  let result = 1n;
  base = base % modulus;
  while (exponent > 0n) {
    if (exponent % 2n == 1n) result = (result * base) % modulus;
    exponent = exponent >> 1n;
    base = (base * base) % modulus;
  }
  return result;
}

console.log(countGoodNumbers(1)); // 5
console.log(countGoodNumbers(2)); // 20
console.log(countGoodNumbers(4)); // 400
console.log(countGoodNumbers(6)); // 8000
console.log(countGoodNumbers(7)); // 40000
console.log(countGoodNumbers(8)); // 160000
console.log(countGoodNumbers(10)); // 3200000
console.log(countGoodNumbers(50)); // 564908303
console.log(countGoodNumbers(806166225460393)); // 643535977
