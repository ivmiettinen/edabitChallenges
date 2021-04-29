// A man has n number of apples. If he eats a percentage p of the
// apples (if apples are available), his children will share the
// remainder of the apples. Create a function to determine the
// number of whole apples his children got. If his children did
// not get any apples, return "The children didn't get any apples".

const getNumberOfApples = (number, percentage) => {
    const apples = Math.floor(number - number * (parseInt(percentage) / 100))

    return apples > 0 ? apples : "The children didn't get any apples"
}

getNumberOfApples(40, '100%')

getNumberOfApples(25, '10%')

// Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!'



