// Fix this broken code!
function checkEquals(arr1, arr2) {
	if (arr1.toString() === arr2.toString()) {
  	return true 
  } else {
  	return false
  }
}


const checkEquals = (arr1, arr2) => arr1.toString() === arr2.toString()



checkEquals([1, 2], [1, 3])