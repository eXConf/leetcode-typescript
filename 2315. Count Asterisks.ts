function countAsterisks(s: string): number {
  let insidePipes = false;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') insidePipes = !insidePipes;
    if (s[i] === '*' && !insidePipes) count++;
  }

  return count;
}

console.log(countAsterisks('l|*e*et|c**o|*de|')); // 2
console.log(countAsterisks('iamprogrammer')); // 0
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l')); // 5
