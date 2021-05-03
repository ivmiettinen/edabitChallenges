// An array is special if every even index contains an
// even number and every odd index contains an odd
// number. Create a function that returns true if an
// array is special, and false otherwise.

const isSpecialArray = (a) => a.every((v, i) => v % 2 == i % 2)

function isSpecialArray(arr) {
    const oddArray = []
    const evenArray = []

    for (i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i])
        }
    }

    for (i = 1; i < arr.length; i += 2) {
        if (arr[i] % 2) {
            oddArray.push(arr[i])
        }
    }

    const combine = evenArray.concat(oddArray)
    return combine.length === arr.length
}

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.