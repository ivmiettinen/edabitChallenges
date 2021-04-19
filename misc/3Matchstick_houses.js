const oneLiner = (p) => {
    return p === 0 ? 0 : p * 5 + 1
}

const mathstickFunc = (p) => {
    let number

    if (p === 0) {
        number = 0
    }
    if (p === 1) {
        let num1 = p + 5
        number = num1
    } else if (p > 1) {
        let num1 = 6

        let final = num1 + (p - 1) * 5

        number = final
    }

    return number
}



const mathstickFun2 = (p) => {
    let number = p

    switch (p) {
        case 0:
            number = 0
            break

        default:
            console.log('aaa', number * 5 + 1)
            break
    }
}
