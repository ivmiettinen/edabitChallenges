//Oma:

const shiftToRight = (x, y) => Math.floor(x / Math.pow(2, y))

shiftToRight(80, 3)

//Esimerkkiratkaisu:

const shiftToRight = (x, y) => Math.floor(x / 2 ** y)

function shiftToRight(x, y) {
    let exponent = Math.pow(2, y)

    console.log('exponent', exponent)

    console.log('xxx', x)

    return Math.floor(x / exponent)
}

shiftToRight(80, 3)
