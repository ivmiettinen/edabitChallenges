// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2) ➞ 7

// plusFive(-8) ➞ -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.


//1:

const makePlusFunction = (baseNum) => {

    return  innerfunction = (secondNum) => baseNum + secondNum

  
}

const plusFive = makePlusFunction(5)

plusFive(2)

plusFive(-8)

//2:

function makePlusFunction(baseNum) {
	return function(x) {
		return baseNum + x;
	};
}

//3 With arrow function: 
const makePlusFunction = baseNum => x => baseNum + x;


