// Given a string of numbers separated by a comma and space, 
// return the product of the numbers.

// Bonus: Try to complete this challenge in one line!

const multiplyNums = (nums) => nums.replaceAll(',', '').split(" ").reduce((acc, crv) => acc * (+crv), 1)


const multiplyNums2 = (nums) => nums.replace(/\,/g, '').split(" ").reduce((acc, crv) => acc * (+crv), 1)


multiplyNums("2, 3") 

multiplyNums("1, 2, 3, 4")

multiplyNums("54, 75, 453, 0")

multiplyNums("10, -2") 


