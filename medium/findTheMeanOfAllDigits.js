// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.

function mean(num) {
    const arrayNumbers = Array.from(num.toString()).map(Number)

    const sum = arrayNumbers.reduce((acc, crv) => {
        return acc + crv
    }, 0)

    return sum / arrayNumbers.length
}

mean(42)
