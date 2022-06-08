function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
};

console.log(getConcatenation([1,2,1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1,3,2,1])); // [1,3,2,1,1,3,2,1]