function hammingWeight(n: number): number {
  return (n >>> 0).toString(2).split('').filter((el) => el === '1').length;
};