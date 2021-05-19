// Create a function that takes a string as an argument and returns
//  a coded (h4ck3r 5p34k) version of the string.



const hackerSpeak = (str) => {
    const stringToNumber = { a: 4, e: 3, o: '0', i: 1, s: 5 }

    for (let i = 0; i < str.length; i++) {
        if (stringToNumber[str[i]]) {
            str = str.replace(str[i], stringToNumber[str[i]])
        }
    }
    return str
}

hackerSpeak('javascript is cool') ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"