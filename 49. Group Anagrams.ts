function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let anagram of strs) {
    const sorted = anagram.split('').sort().join('');
    const saved = map.get(sorted);

    if (saved === undefined) map.set(sorted, [anagram]);
    else saved.push(anagram);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([''])); // [[""]]
console.log(groupAnagrams(['a'])); // [["a"]]
