// Create a function that takes a string as an argument
//  and converts the first character of each word to
//  uppercase. Return the newly formatted string.

// You can expect a valid string for each test case.
// Some words may contain more than one uppercase
// letter (see example #4).

function makeTitle(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
}

makeTitle('This is a title')
