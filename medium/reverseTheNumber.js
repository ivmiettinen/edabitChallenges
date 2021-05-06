// Reverse the Number

// Create a function that takes an integer n and 
// reverses it.
// This challenge is about using two operators that 
// are related to division.
// If the number is negative, treat it like it's 
// positive.

const rev = (n) =>  Math.abs(n).toString().split('').reverse().join('')


rev(5121)

rev(69)

rev(-122157)


