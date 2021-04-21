//Esimerkki:

function concat(...args) {
    return [].concat(...args)
}

//Oma:

const concat = (...args) => [...args.flat()]

concat([1, 2, 3], [4, 5], [6, 7])
