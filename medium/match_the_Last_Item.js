// Create a function that takes an array of items and checks
//  if the last item matches the rest of the array concatenated 
//  together.

function matchLastItem(arr) {
	return arr.pop() === arr.join('');
}

const matchLastItem = (arr) => {
    console.log('arr', arr)

    const entireArray = arr.slice()

    const last_element = entireArray.pop()

    return entireArray.join('') === last_element
}

matchLastItem(['rsq', '6hi', 'g', 'rsq6hig'])
matchLastItem([1, 1, 1, "11"])
// The last item is the rest joined.
