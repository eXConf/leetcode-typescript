function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number,
): number {
  let maxEffect = 0;
  let maxEffectStartIdx = 0;
  let currentEffect = 0;

  for (let i = 0; i < minutes; i++) {
    maxEffect += customers[i] * grumpy[i];
  }
  currentEffect = maxEffect;

  for (let i = minutes; i < customers.length; i++) {
    currentEffect += customers[i] * grumpy[i];
    currentEffect -= customers[i - minutes] * grumpy[i - minutes];
    if (currentEffect > maxEffect) {
      maxEffect = currentEffect;
      maxEffectStartIdx = i - minutes + 1;
    }
  }

  for (let i = maxEffectStartIdx; i < maxEffectStartIdx + minutes; i++) {
    grumpy[i] = 0;
  }

  let sum = 0;
  customers.forEach((val, idx) => {
    if (grumpy[idx] === 0) sum += val;
  });

  return sum;
}

console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3),
); // 16
console.log(maxSatisfied([1], [0], 1)); // 1
console.log(maxSatisfied([4,10,10], [1,1,0], 2)); // 24