function numJewelsInStones(jewels: string, stones: string): number {
  const map = new Map<string, number>();

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    map.set(stone, 1 + (map.get(stone) || 0));
  }

  let result = 0;
  for (let i = 0; i < jewels.length; i++) {
    const jewel = jewels[i];
    result += map.get(jewel) || 0;
  }

  return result;
}
