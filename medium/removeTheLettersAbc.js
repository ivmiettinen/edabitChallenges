// Remove the Letters ABC

// Create a function that will remove the letters
// "a", "b" and "c" from the given string and
// return the modified version. If the given string
//  does not contain "a", "b", or "c", return null.

const removeABC = (str) => str.match(/[abc]/g) ? str.replace(/[a-c]/g, '') : null

removeABC("hello world!")

removeABC("This might be a bit hard")

removeABC("") 