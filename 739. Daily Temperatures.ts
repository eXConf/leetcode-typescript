function dailyTemperatures(temperatures: number[]): number[] {
  const len = temperatures.length;
  let slidingLeft = len - 1;
  let slidingRight = len;
  const result = <number[]>[];

  for (let i = len - 1; i >= 0; i--) {
    for (let j = slidingLeft; j < slidingRight; j++) {
      if (temperatures[i] < temperatures[j]) {
        result.push(j - i);
        break;
      }
    }
    slidingLeft--;
    if (temperatures[i] >= temperatures[slidingRight - 1]) {
      slidingRight = i + 1;
      result.push(0);
    }
  }

  return result.reverse();
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
console.log(dailyTemperatures([5])); // [0]
