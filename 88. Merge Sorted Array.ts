/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let left = 0;
  let right = 0;

  while (left < nums1.length) {
    if (nums2[right] < nums1[left] || left >= m) {
      nums1.splice(left, 0, nums2[right]);
      right += 1;
      m += 1;
      nums1.pop();
    } else {
      left += 1;
    }
  }
}

const arr1 = [1, 2, 3, 0, 0, 0];
merge(arr1, 3, [2, 5, 6], 3);
console.log(arr1);

const arr2 = [1];
merge(arr2, 1, [], 0);
console.log(arr2);

const arr3 = [0];
merge(arr3, 0, [1], 1);
console.log(arr3);

const arr4 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
merge(arr4, 6, [1, 2, 2], 3);
console.log(arr4);
