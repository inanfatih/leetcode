/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

var isValid = function (s) {
  var pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  var open = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] in pairs) {
      open.push(s[i])
    } else {
      var current = open.pop()
      if (pairs[current] !== s[i]) {
        return false
      }
    }
  }
  return open.length === 0
}

var isValid2 = function (s) {
  let preS = ''
  while (s !== preS) {
    preS = s
    s = s.split('()').join('')
    s = s.split('[]').join('')
    s = s.split('{}').join('')
  }
  return !s
}
console.log(isValid2('{(())[]}'))

// const validateParanthesis = (input) => {
//   if (input === '') {
//     return true
//   } else if (!input) {
//     return false
//   }
//   let chars = input.split('')

//   const length = chars.length

//   let i = 0
//   let beginning = 0
//   let loopCount = 0
//   let j = 0

//   if (chars[0] && (chars[0] === ')' || chars[0] === '}' || chars[0] === ']')) {
//     return false
//   }

//   while (chars[i] === '(' || chars[i] === '{' || chars[i] === '[') {
//     if (
//       chars[i + 1] &&
//       !(chars[i + 1] === '(' || chars[i + 1] === '{' || chars[i + 1] === '[')
//     ) {
//       j = i + 1
//       loopCount++

//       while (i >= beginning) {
//         if (!chars[j]) {
//           return false
//         }
//         if (chars[i] === '(') {
//           if (chars[j] !== ')') {
//             return false
//           }
//         } else if (chars[i] === '{') {
//           if (chars[j] !== '}') {
//             return false
//           }
//         } else if (chars[i] === '[') {
//           if (chars[j] !== ']') {
//             return false
//           }
//         }
//         i--
//         j++
//         loopCount--
//       }
//       beginning = j
//       i = j
//       if (
//         chars[j] &&
//         !(chars[j] === '(' || chars[j] === '{' || chars[j] === '[')
//       ) {
//         return false
//       }
//     } else {
//       loopCount++
//       i++
//     }
//   }
//   if (loopCount !== 0) {
//     return false
//   }

//   return true
// }

// console.log(validateParanthesis('()('))
