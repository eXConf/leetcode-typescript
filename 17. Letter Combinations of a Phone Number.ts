function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  type lettersType = {
    [id: string]: string;
  };
  const letters = <lettersType>{
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const combos = <string[]>[];

  function dp(digits: string, combo: string): void {
    if (digits.length === 0) {
      combos.push(combo);
      return;
    }

    const digit = digits[0];
    for (let j = 0; j < letters[digit].length; j++) {
      dp(digits.substring(1), combo + letters[digit][j]);
    }
  }

  dp(digits, '');

  return combos;
}

console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')); // []
console.log(letterCombinations('2')); // ["a","b","c"];
