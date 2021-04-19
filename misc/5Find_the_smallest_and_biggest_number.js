

bigAndSmall2(exampleArray)

const bigAndSmallNumber = (array) => {
    let max = Math.max(...array)

    let min = Math.min(...array)

    let newArray = [max, min]

    let sortItOut = newArray.sort((a, b) => a - b)

    return sortItOut
}

bigAndSmallNumber(exampleArray)

/////////////////////////


let exampleArray = [3, 2, 6, 7, 1, 5, 4]

const bigAndSmall2 = (array) => {
    return [Math.min(...array), Math.max(...array)]
}



//////////////////////////////With for-loop:

const array = [37, -5, -15, -37, 5, 15]

const forLoopMinMax = () => {
    let min = array[0],
        max = array[0]

    for (let i = 1; i < array.length; i++) {
        let value = array[i]
        min = value < min ? value : min

        console.log('min', min)

        max = value > max ? value : max

        console.log('max', max)
    }

    return [min, max]
}

const [forLoopMin, forLoopMax] = forLoopMinMax()
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) // Minimum: -37, Maximum: 37
