const fu = () => {
    return 9
}

const ge = () => {
    return 10
}

//Oikea:
const whichIsLarger = (f, g) => {
    return f() > g() ? 'f' : g() > f() ? 'g' : 'neither'
}

//Oma:

const whichIsLarger = (f, g) => {
    let a = f()

    let b = g()

    if (a > b) {
        return 'f'
    } else if (a < b) {
        return 'g'
    } else {
        return 'neither'
    }
}
