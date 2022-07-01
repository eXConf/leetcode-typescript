function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let units = 0;
  let boxes = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    const freeSpace = truckSize - boxes;
    let num = boxTypes[i][0];

    while (num > freeSpace) {
      num--;
    }

    while (boxTypes[i][0] > 0 && boxes < truckSize) {
      units += boxTypes[i][1] * num;
      boxes += num;
      boxTypes[i][0] -= num;
    }
  }

  return units;
}

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4,
  ),
); // 8
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10,
  ),
); // 91
