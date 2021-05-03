// Arrays can be mixed with various types. Your
// task for this challenge is to sum all the
// number elements in the given array. Create
// a function that takes an array and returns
// the sum of all numbers in the array.

const numbersSum = (arr) =>
    arr.filter((p) => typeof p === 'number').reduce((acc, crv) => acc + crv, 0)

numbersSum([1, 2, '13', '4', '645'])
// ➞ 3

numbersSum([true, false, '123', '75'])

numbersSum([1, 2, 3, 4, 5, true])
