/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  nums.forEach((element) => {
    if (element !== val) {
      nums[i] = element
      i++
    }
  })
  return nums.length && i + 1
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
