// Create a function that moves all capital letters to the front of a word.

// Notes
// Keep the original relative order of the upper and lower case letters the same.

function capToFront(s) {
	
    const split = s.split('').toString()

    const regex1 = /[A-Z]/g;

    const regex2 = /[a-z]/g;

    const bigLetters = split.match(regex1)

    return bigLetters.concat(split.match(regex2)).toString().replace(/,/g, '')

}

capToFront("hApPy")


function capToFront(s) {
    
	let lowerCase = [...s].filter(l => l === l.toLowerCase())
	let upperCase = [...s].filter(l => l === l.toUpperCase())
	return [...upperCase,...lowerCase].join("")
}
