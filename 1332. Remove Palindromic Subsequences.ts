// We can delete all 'a' in first turn and then all 'b' in second one

function removePalindromeSub(s: string): number {
  return s.length === 0 ? 0 : s === s.split('').reverse().join('') ? 1 : 2;
}

console.log(removePalindromeSub('ababa')); // 1
console.log(removePalindromeSub('abb')); // 2
console.log(removePalindromeSub('baabb')); // 2
