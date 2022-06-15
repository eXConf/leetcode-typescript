function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[],
): boolean[] {
  const result = <boolean[]>[];

  for (let i = 0; i < l.length; i++) {
    const start = l[i];
    const end = r[i] + 1;

    const arr = nums.slice(start, end);
    arr.sort((a, b) => a - b);

    if (arr.length <= 2) {
      result.push(true);
      continue;
    }

    const diff = arr[1] - arr[0];
    let isArithmetic = true;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] - arr[j] !== diff) {
        isArithmetic = false;
        break;
      }
    }
    result.push(isArithmetic);
  }

  return result;
}

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])); // [true,false,true]

console.log(
  checkArithmeticSubarrays(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10],
  ),
); // [false,true,false,false,true,true]
