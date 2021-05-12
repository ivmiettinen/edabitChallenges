// Create a function to check whether the given parameter
// is an Object or not.

// Notes
// Inputs may be null, primitive wrapper types, dates.

function isObject(value) {
    console.log('value', value)
    // return typeof yourVariable === 'object' && yourVariable !== null

    return value instanceof Object
}

const isObject = (value) => value instanceof Object

isObject(function add(x, y) {
    return x + y
})

function C() {}

let o = new C()

o instanceof C
