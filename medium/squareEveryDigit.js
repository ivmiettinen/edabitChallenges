// Create a function that squares every digit of a number.
// The function receives an integer and must return an integer.

const squareDigits = (n) => 
     Number((""+n).split("").map((n) =>
         (n*n)
    ).join(''))


squareDigits(9119)


