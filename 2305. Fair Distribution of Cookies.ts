function distributeCookies(cookies: number[], k: number): number {
  let minUnfairness: number | null = null;

  function dp(idx: number, kids: number[]): void {
    if (idx === cookies.length) {
      const result = Math.max(...kids);
      if (minUnfairness === null || result < minUnfairness) {
        minUnfairness = result;
      }
      return;
    }

    for (let i = 0; i < kids.length; i++) {
      const newKids = [...kids];
      newKids[i] += cookies[idx];
      if (minUnfairness !== null && newKids[i] > minUnfairness) {
        continue;
      }
      dp(idx + 1, newKids);
    }
  }

  dp(0, Array(k).fill(0));

  return minUnfairness || 0;
}

console.log(distributeCookies([8, 15, 10, 20, 8], 2)); // 31
console.log(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3)); // 7
