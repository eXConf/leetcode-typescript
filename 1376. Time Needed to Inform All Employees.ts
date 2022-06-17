function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[],
): number {
  if (n === 1) return informTime[0];

  const map = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    if (manager[i] === -1) continue;

    const list = map.get(manager[i]);

    if (list === undefined) {
      map.set(manager[i], [i]);
    } else {
      list.push(i);
    }
  }

  function dfs(head: number, time: number): void {
    if (!map.has(head)) {
      maxTime = Math.max(time, maxTime);
      return;
    }

    for (let employee of map.get(head)!) {
      dfs(employee, time + informTime[employee]);
    }
  }

  let maxTime = 0;
  dfs(headID, informTime[headID]);

  return maxTime;
}

console.log(numOfMinutes(1, 0, [-1], [0])); // 0
console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0])); // 1
console.log(
  numOfMinutes(
    17,
    0,
    [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 14, 14],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
  ),
); // 8

console.log(
  numOfMinutes(
    11,
    4,
    [5, 9, 6, 10, -1, 8, 9, 1, 9, 3, 4],
    [0, 213, 0, 253, 686, 170, 975, 0, 261, 309, 337],
  ),
); // 2560
