// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.

function missingNum(arr) {
    const reduceArr = arr.reduce((acc, crv) => {
        return acc + crv
    }, 0)

    const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const startingSum = oneToTen.reduce((acc, crv) => {
        return acc + crv
    }, 0)

    return startingSum - reduceArr
}
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])
