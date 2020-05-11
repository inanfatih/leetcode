/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function (strs) {
  if (!!!strs[0]) {
    return '';
  }

  let character = '';
  let result = '';
  let isBreak = false;
  for (let i = 0; i < strs[0].length; i++) {
    character = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (!!!character || character !== strs[j][i]) {
        isBreak = true;
        break;
      } else {
        continue;
      }
    }
    if (!isBreak) {
      result += character;
    } else {
      break;
    }
  }
  return result;
};

function longestCommonPrefix2(strs) {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }

  return strs[0];
}

console.log('asdfasd', longestCommonPrefix(['asdfasdf', 'aa']));
