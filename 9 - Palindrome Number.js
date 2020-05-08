const isPalindrome = (number) => {
  let numberToArray = number.toString().split('');
  if (number === 0) {
    return true;
  }
  if (number < 0 || number % 10 === 0) {
    return false;
  }

  let length = numberToArray.length;

  if (length % 2 === 1) {
    for (let index = 0; index < (length - 1) / 2; index++) {
      if (numberToArray[index] === numberToArray[length - 1 - index]) {
        continue;
      } else {
        return false;
      }
    }
  } else {
    for (let index = 0; index < length / 2; index++) {
      if (numberToArray[index] === numberToArray[length - 1 - index]) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;

  // let numberToArray = number.toString().split('');

  //   let reverseNumber = numberToArray.reverse().join('');

  //   if (number.toString() === number.toString().split('').reverse().join('')) {
  //     return true;
  //   }
};

console.log(isPalindrome(121));
