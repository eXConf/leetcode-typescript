function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length === 1) return [[...nums]];

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift()!;

    const perms = permute(nums);

    for (let perm of perms) {
      perm.push(n);
    }
    result.push(...perms);

    nums.push(n);
  }

  return result;
}

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
