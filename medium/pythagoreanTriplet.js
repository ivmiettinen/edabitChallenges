// Create a function that validates whether three given
// integers form a Pythagorean triplet. The sum of the
// squares of the two smallest integers must equal the
// square of the largest number to be validated.

function isTriplet(n1, n2, n3) {
    const copy = [n1, n2, n3].sort((a, b) => a - b)

    return copy[0] * copy[0] + copy[1] * copy[1] === copy[2] * copy[2]
}

const isTriplet = (a, b, c) => {
    [a, b, c] = [a, b, c].sort((a, b) => a - b)
    return a ** 2 + b ** 2 == c ** 2
}

isTriplet(3, 4, 5)
// ➞ true
// 3² + 4² = 25
// 5² = 25

isTriplet(13, 5, 12)
// ➞ true
// 5² + 12² = 169
// 13² = 169

isTriplet(1, 2, 3)
// ➞ false
// 1² + 2² = 5
// 3² = 9
