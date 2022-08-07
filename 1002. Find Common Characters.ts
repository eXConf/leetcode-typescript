function commonChars(words: string[]): string[] {
  if (words.length === 1) return words[0].split('');

  const map1 = new Map<string, number>();
  const word1 = words[0];

  for (let i = 0; i < word1.length; i++) {
    const char = word1[i];
    map1.set(char, 1 + (map1.get(char) || 0));
  }

  for (let i = 1; i < words.length; i++) {
    const map2 = new Map<string, number>();
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      map2.set(char, 1 + (map2.get(char) || 0));
    }

    for (let [k, v1] of map1) {
      const v2 = map2.get(k);

      if (!v2) {
        map1.delete(k);
      } else if (v2 < v1) {
        map1.set(k, v2);
      }
    }
  }

  const result = [] as string[];

  for (let [k, v] of map1) {
    for (let i = 0; i < v; i++) {
      result.push(k);
    }
  }

  return result;
}
