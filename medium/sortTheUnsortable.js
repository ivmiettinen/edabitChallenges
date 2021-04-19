// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements".
//& Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

function sortIt(arr) {
  return arr.sort((a, b) => a - b);
}

const sortIt = (arr) => arr.sort((a, b) => a - b);

sortIt([[4], [1], [3]]);

sortIt([[4], [1], [3]]);

sortIt([4, [1], 3]);

sortIt([[4], 1, [3]]);

sortIt([[3], 4, [2], [5], 1, 6]);
