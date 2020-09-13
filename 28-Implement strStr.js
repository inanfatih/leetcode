/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0
  if (!needle) return -1
  if (haystack.split(needle).length > 1) {
    return haystack.split(needle)[0].length
  } else return -1
}
