// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(sentence) {
    const findNemo = sentence.split(' ').indexOf('Nemo')

    return findNemo >= 0
        ? `I found Nemo at ${findNemo + 1}!`
        : `I can't find Nemo :(`
}

findNemo('I am finding Nemo !')

findNemo('I emo am')
