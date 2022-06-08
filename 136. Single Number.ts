function singleNumber(nums: number[]): number {
  let xor = 0;

  for (let num of nums) {
    // console.log(xor.toString(2), num.toString(2), (xor ^ num).toString(2));
    xor ^= num;
  }
  return xor;
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([4, 1, 4, 19, 5, 7, 1, 5, 7])); // 2


// function singleNumber(nums: number[]): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
//       return nums[i];
//     }
//   }
//   return -1;
// }
