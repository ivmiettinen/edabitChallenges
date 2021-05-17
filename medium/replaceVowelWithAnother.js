
function uniqueSort(arr) {
    arr.sort((a, b) => a - b)

    const newSet = new Set(arr)

    const spread = [...newSet]

    return spread
}

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])


const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a > b)