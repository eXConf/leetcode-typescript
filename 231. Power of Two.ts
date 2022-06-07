function isPowerOfTwo(n: number): boolean {
  return n > 0 ? !(n & (n - 1)) : false;
}

function isPowerOfTwo_My(n: number): boolean {
  return n.toString(2).lastIndexOf('1') === 0;
}
