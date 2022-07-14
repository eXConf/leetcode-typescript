function rearrangeCharacters(s: string, target: string): number {
  const targetMap = new Map<string, number[]>();

  for (let i = 0; i < target.length; i++) {
    const char = target[i];
    if (!targetMap.has(char)) targetMap.set(char, [1, 0]);
    else targetMap.get(char)![0]++;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (targetMap.has(char)) targetMap.get(char)![1]++;
  }

  let min = Number.POSITIVE_INFINITY;

  for (let [k, v] of targetMap) {
    const [need, have] = v;
    const coef = Math.trunc(have / need);
    if (coef < min) min = coef;
  }
  return min;
}

// function rearrangeCharacters(s: string, target: string): number {
//   let temp = target.split('');
//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     const idx = temp.indexOf(s[i]);
//     if (idx >= 0) {
//       temp.splice(idx, 1);

//       if (temp.length === 0) {
//         count++;
//         temp = target.split('');
//       }
//     }
//   }
//   return count;
// }

console.log(rearrangeCharacters('ilovecodingonleetcode', 'code')); // 2
console.log(rearrangeCharacters('abcba', 'abc')); // 1
console.log(rearrangeCharacters('abbaccaddaeea', 'aaaaa')); // 1
