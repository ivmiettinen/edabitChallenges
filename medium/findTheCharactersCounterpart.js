// Create a function that takes a single character as an argument 
// and returns the char code of its lowercased / uppercased 
// counterpart.
// The argument will always be a single character.
// Not all inputs will have a counterpart (e.g. numbers), in which 
// case return the inputs char code.

const counterpartCharCode = (char) => {



    return char === char.toUpperCase()
        ? char.toLowerCase().charCodeAt(0)
        : char.toUpperCase().charCodeAt(0)
}

// counterpartCharCode('A') ➞ 97
// counterpartCharCode("a") ➞ 65