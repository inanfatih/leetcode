// function searchInsert(nums: number[], target: number): number {
//   for (let i: number = 0; i < nums.length ; i++)
//   {
//     if (nums[i] >= target) {
//       return i
//     }
//   }
//   return nums.length
// }

function searchInsert(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return start
}

console.log(searchInsert([1, 3, 5, 6], 5))
