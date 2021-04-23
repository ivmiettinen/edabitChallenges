// Create a function that returns true if all parameters are truthy, and false otherwise.

// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

const allTruthy = (...args) => [...args].every((arg) => Boolean(arg) === true)

const allTruthy = (...args) => args.every(Boolean)
