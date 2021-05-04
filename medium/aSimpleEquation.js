// A Simple Equation

// Mubashir needs your help to make a simple
// equation. Create a function which takes three
// numbers: a, b and c, and returns an equation
// as a string using simple arithmetic operators
// (+, -, *, /).

// Return any one of the possible answers to
// pass the tests. If there is no equation between
// a,b and c then return "".


function simpleEquation(a, b, c){
	if ((a+b)==c) return `${a}+${b}=${c}`
	if ((b*c)==a) return `${b}*${c}=${a}`
	return''
}

function simpleEquation(a, b, c) {
    console.log('a,b,c', a, b, c)

    if (a + b === c) {
        return `${a}+${b}=${c}`
    }
    if (b + a === c) {
        return `${b}+${a}=${c}`
    }
    if (c - b === a) {
        return `${c}-${b}=${a}`
    }
    if (c - a === b) {
        return `${c}-${a}=${b}`
    }
    if (a / b === c) {
        return `${a}/${b}=${c}`
    } else {
        return ''
    }
}
