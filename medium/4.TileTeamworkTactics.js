//esimerkkiratkaisu:

function possibleBonus(a, b) {
    return b - a <= 6 && b - a > 0
}

possibleBonus(3, 3)

//Oma:

const possibleBonus = (a, b) => {
    function difference(a, b) {
        return Math.abs(a - b)
    }

    if (a > b) {
        return false
    }

    if (a < b && difference(a, b) <= 6) {
        console.log('difference', difference(a, b))
        return true
    } else {
        return false
    }
}

possibleBonus(3, 3)

// function difference(a, b) {
//     return Math.abs(a - b)
// }

// const possibleBonus2 = (a, b) => {return a > b ? false : a === b ? true : a < b && difference(a, b) <= 6 ? true : false  }
