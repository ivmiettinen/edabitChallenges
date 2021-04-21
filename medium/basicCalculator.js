// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

const calculator = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '/':
            return num1 / num2 === Infinity ? `Can't divide by 0!` : num1 / num2
        case '*':
            return num1 * num2
        default:
            break
    }
}

calculator(2, '*', 5)
