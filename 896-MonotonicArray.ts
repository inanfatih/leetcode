/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 * Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 */

// function isMonotonic(nums: number[]): boolean {
//   let toSort = nums.slice()
//   toSort.sort()

//   if (toSort.toString() == nums.toString()) {
//     return true
//   } else {
//     toSort.sort((a, b) => b - a)
//     if (toSort.toString() == nums.toString()) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

function isMonotonic(nums: number[]): boolean {
  let length = nums.length

  let isIncreasing = false
  let isDecreasing = false

  for (let i = 1; i < length; i++) {
    if (nums[i] > nums[i - 1]) {
      isIncreasing = true
    } else if (nums[i] < nums[i - 1]) {
      isDecreasing = true
    }
    if (isIncreasing && isDecreasing) 
    {
      return false
    }
  }

  return true
}

isMonotonic([1, 2, 1])
