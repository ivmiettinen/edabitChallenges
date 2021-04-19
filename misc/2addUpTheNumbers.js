const numberFunction = (number) => {
    let numberArray = []

    console.log('numberArray', numberArray)

    for (i = 0; i <= number; i++) {
        numberArray.push(i)
    }

    let reduced = numberArray.reduce((a, b) => {
        return a + b
    }, 0)

    return reduced
}

// function addUp(num) {
//     var total = 0;
//     for (var i = 1; i <= num; i++) {
//       total += i;
//     }
//     return total;
//   }

const numFunc = (num) => {
    let sum = 0

    for (i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}
