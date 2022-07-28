function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], 1 + (map1.get(s[i]) || 0));
    map2.set(t[i], 1 + (map2.get(t[i]) || 0));
  }

  for (let [k, v] of map1) {
    if (v !== map2.get(k)) return false;
  }

  return true;
}


// With sorting

// function isAnagram(s: string, t: string): boolean {
//   if (s.length != t.length) return false;

//   return splitSortJoin(s) === splitSortJoin(t);
// };

// function splitSortJoin(s: string): string {
//   return s.split('')
//     .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
//     .join();
// }