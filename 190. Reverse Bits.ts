function reverseBits(n: number): number {
  return parseInt(
    n.toString(2).split('').reverse().join('').padEnd(32, '0'),
    2,
  );
}

console.log(reverseBits(parseInt('00000010100101000001111010011100', 2))); // 964176192 (00111001011110000010100101000000)
