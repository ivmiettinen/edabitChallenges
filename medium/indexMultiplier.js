// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

const indexMultiplier = (arr) =>
    arr
        .map((arr, index) => arr * index)
        .reduce((acc, crv) => acc + crv, 0)



//
        
const indexMultiplier = (arr) => arr.reduce((acc, crv, i) => acc + crv * i, 0)


indexMultiplier([1, 2, 3, 4, 5])
