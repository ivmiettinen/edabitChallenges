// Given an array of women and an array of men,
// either:

// Return "sizes don't match" if the two arrays
// have different sizes.
// If the sizes match, return an array of pairs,
//  with the first woman paired with the first
//  man, second woman paired with the second
//  man, etc.

function zipIt(women, men) {
    let twoPairArray = []
    let pair

    if (women.length === men.length) {
        for (i = 0; i < women.length; i++) {
            pair = [women[i], men[i]]

            twoPairArray.push(pair)
        }
        return twoPairArray
    } else {
        return `sizes don't match`
    }
}

const zipIt = (women, men) => {
	if (women.length === men.length) {
        return women.map((woman, i) => [woman, men[i]])}
    
    return `sizes don't match`
    }

//     zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
//  "sizes don't match"

// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
//   [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]