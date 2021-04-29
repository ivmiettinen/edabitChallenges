// Create a function which concantenates the number 7 to the
// end of every chord in an array. Ignore all chords
// which already end with 7.

// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

function jazzify(arr) {
    return arr.map((p) => {
        if (p === []) {
            return
        } else if (p.endsWith(7)) {
            return p
        } else {
            return p + 7
        }
    })
}

jazzify(['F', 'E7', 'A', 'Ab7', 'Gm7', 'C7'])

jazzify([])

jazzify(['G', 'F', 'C'])
