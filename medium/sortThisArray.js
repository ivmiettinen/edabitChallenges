// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

function ascDesNone(arr, str) {
  if (str === 'Asc') {
    console.log('arr', arr);
    return arr.sort((a, b) => a - b);
  }

  if (str === 'Des') {
    return arr.sort((a, b) => b - a);
  }
  if (str === 'None') {
    return arr;
  } else {
    return arr;
  }
}

function ascDesNone(arr, str) {
  switch (str) {
    case 'Asc':
      return arr.sort((a, b) => a - b);
    case 'Des':
      return arr.sort((a, b) => b - a);
    default:
      return arr;
  }
}

ascDesNone([4, 3, 2, 1], 'Asc');

ascDesNone([7, 8, 11, 66], 'Des');

ascDesNone([1, 2, 3, 4], 'None');
