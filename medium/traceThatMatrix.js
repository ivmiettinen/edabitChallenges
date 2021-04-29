// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// Write a function that takes a square matrix and computes its trace.

function trace(arr) {
    let totalSum = 0

    for (var i = 0; i < arr.length; i++) {
        console.log('insideLoop', arr[i][i])
        totalSum += arr[i][i]
    }

    return totalSum
}

const trace = (arr) => arr.reduce((a, e, i) => a + e[i], 0)

trace([
    [1, 4],
    [4, 1],
])

trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
])

trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4],
])
