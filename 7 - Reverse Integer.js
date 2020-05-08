/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */

const reverse = function (x) {
//   if (x >= Math.pow(2, 31) - 1 || x <= -1 * Math.pow(2, 31)) {
//     return 0;
//   }

//   let multiplier = 1;
//   if (x < 0) {
//     multiplier = -1;
//     x = x * multiplier;
//   }
//   let numbers = x.toString().split('');

//   for (let index = numbers.length; index > 0; --index) {
//     if (numbers[index - 1] === '0') {
//       numbers.pop();
//     } else break;
//   }

//   if (
//     numbers.reverse().join('') * multiplier >= Math.pow(2, 31) - 1 ||
//     numbers.reverse().join('') * multiplier <= -1 * Math.pow(2, 31)
//   ) {
//     return 0;
//   } else return numbers.reverse().join('') * multiplier;

 let reverse = 0;
 const limit = 2147483648;
 while (x != 0) {
   reverse = reverse * 10 + (x % 10);
   x = parseInt(x / 10);
 }
 if (reverse < -limit || reverse > limit) {
   return 0;
 }
 return reverse;
};
//-2147483648
//-1563847412
console.log(reverse(-1563847412));
