function minPartitions(n: string): number {
  const offset = 48;
  let currentMax = 0;

  for (let i = 0; i < n.length; i++) {
    const digit = n.charCodeAt(i) - 48;
    if (digit === 9) return 9;
    if (digit > currentMax) currentMax = digit;
  }
  return currentMax;
};


function minPartitions1(n: string): number {
  return Math.max(...n.split('').map(el => parseInt(el)));
};

console.log(minPartitions('32')); // 3
console.log(minPartitions('82734')); // 8
console.log(minPartitions('27346209830709182346')); // 9