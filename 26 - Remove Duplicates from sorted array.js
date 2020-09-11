/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (!nums || (nums && nums.length < 2)) {
    return nums
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] && nums[i] === nums[i + 1]) {
      nums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length))
    }
  }
  return nums
}

// var removeDuplicates = function (nums) {
//   var i = 0
//   nums.forEach(function (elem) {
//     if (elem !== nums[i]) {
//       nums[++i] = elem
//     }
//   })
//   return nums.length && i + 1
// }

console.log(removeDuplicates([1, 1, 2, 2, 3, 42]))
