// Create a function to return the amount of potatoes there
//  are in a string.

const potatoes = (str) => str.match(/potato/g).length

potatoes('potato')

potatoes("potatopotato")