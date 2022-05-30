function findCenter(edges: number[][]): number {
  const set: Set<number> = new Set();

  for (const [i, j] of edges) {
    if (set.has(i)) return i;
    if (set.has(j)) return j;

    set.add(i);
    set.add(j);
  }

  return -1;
}

function findCenter1(edges: number[][]): number {
  const links: (number | null)[] = [];

  for (const [i, j] of edges) {
    links[i] = !links[i] ? 1 : links[i]! + 1;
    links[j] = !links[j] ? 1 : links[j]! + 1;
  }

  let maxLinks = 0;
  let idx = 0;

  for (let i = 0; i < links.length; i++) {
    const node = links[i];
    if (node && node > maxLinks) {
      maxLinks = node;
      idx = i;
    }
  }

  return idx;
}

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ]),
);
