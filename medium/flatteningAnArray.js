//I'm trying to write a function to flatten an array of subarrays
// into one array. (Suppose I am unware there is a .flat()
// method in the Array prototype). In other words, I want
//  to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2 = arr2.concat(arr[i]);
    }
    return arr2;
  }

  
//Option2:

function flatten(arr) {
  arr2 = [];

  arr2.concat(arr);
  for (let i = 1; i < arr.length; i++) {
    arr2 = [].concat(...arr);
  }
  return arr2;
}




flatten([
  [1, 2],
  [3, 4],
]);
// Expected: [1, 2, 3, 4]

flatten([
  ['a', 'b'],
  ['c', 'd'],
]);
// Expected: ["a", "b", "c", "d"]

flatten([
  [true, false],
  [false, false],
]);
// Expected: [true, false, false, false]
