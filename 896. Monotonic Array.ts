function isMonotonic(nums: number[]): boolean {
  if (nums.length === 1) return true;

  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) isDecreasing = false;
    if (nums[i] < nums[i - 1]) isIncreasing = false;
  }

  return isIncreasing || isDecreasing;
}

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 3, 2])); // false


// function isMonotonic_1(nums: number[]): boolean {
//   if (nums.length === 1) return true;

//   let isIncreasing: boolean | null = null;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       if (isIncreasing === null) {
//         isIncreasing = nums[i] > nums[i - 1];
//       } else {
//         if (nums[i] > nums[i - 1] !== isIncreasing) {
//           return false;
//         }
//       }
//     }
//   }

//   return true;
// }