function findAndReplacePattern(words: string[], pattern: string): string[] {
  const result = [] as string[];
  const pLetters = Array.from(new Set<string>(pattern.split('')));

  words: for (let word of words) {
    let idx = 0;
    let newWord = '';
    const map = new Map<string, string>();

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (map.has(char)) newWord += map.get(char);
      else {
        if (idx === pLetters.length) continue words;
        newWord += pLetters[idx];
        map.set(char, pLetters[idx]);
        idx++;
      }
    }

    if (newWord === pattern) result.push(word);
  }
  return result;
}

console.log(
  findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'),
); // ["mee","aqq"]
console.log(findAndReplacePattern(['a', 'b', 'c'], 'a')); // ["a","b","c"]
console.log(
  findAndReplacePattern(['badc', 'abab', 'dddd', 'dede', 'yyxx'], 'baba'),
); // ["abab","dede"]
