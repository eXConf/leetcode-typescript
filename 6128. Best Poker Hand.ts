function bestHand(ranks: number[], suits: string[]): string {
  // Check for flush
  let count = 0;
  let targetSuit = suits[0];
  suits.forEach(suit => suit === targetSuit && count++);
  const isFlush = count === 5;
  if (isFlush) return 'Flush';

  // Check for Three of a Kind
  const map = new Map<number, number>();
  ranks.forEach(rank => map.set(rank, 1 + (map.get(rank) || 0)));
  let isPair = false;
  for (let [k, v] of map) {
    if (v >= 3) return 'Three of a Kind';
    if (v === 2) isPair = true;
  }

  // Check for Pair
  if (isPair) return 'Pair';

  // Else it's a High Card
  return 'High Card';
}

console.log(bestHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'])); // Flush
console.log(bestHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'])); // Three of a Kind
console.log(bestHand([10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'])); // Pair
console.log(bestHand([10, 8, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'])); // High Card
