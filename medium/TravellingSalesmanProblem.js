// A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.

// If we have cities A, B and C, possible paths would be:

// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B

const paths = (n) => {
    for (var i = n - 1; i >= 1; i--) {
        n = n * i
    }
    return n
}

paths(4)
