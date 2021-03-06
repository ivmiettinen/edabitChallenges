// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// Items in the array will always be integers.
// Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
// Return false if the arguments are empty or not provided.

const marathonDistance = (d) => {
    console.log('d', d)

    return d.reduce((acc, crv) => acc + Math.abs(crv), 0) === 25
}

marathonDistance([1, 2, 3, 4])
