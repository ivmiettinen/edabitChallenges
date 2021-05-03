function greetingMaker(salutation) {
    return function closure(name) {
        return salutation + ', ' + name
    }
}


const greetingMaker = (salutation) =>
     (name) => salutation + ', ' + name



     const greeting = greetingMaker("Hello")
greeting("James") 
// ➞ "Hello, James"