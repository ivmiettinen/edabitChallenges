// Write a function that takes an integer i and returns
// an integer with the integer backwards followed by
// the original integer.

const reverseAndNot = (i) =>
    Number('' + i.toString().split('').reverse().join('') + i)

reverseAndNot(123)

reverseAndNot(152)

reverseAndNot(123456789)
