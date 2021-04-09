// Create a function that takes an object and returns the keys and values as separate arrays. 
// Return the keys sorted alphabetically, and their corresponding values in the same order.


const keysAndValues = (obj) => [Object.keys(obj), Object.values(obj)]


keysAndValues({ a: 1, b: 2, c: 3 })