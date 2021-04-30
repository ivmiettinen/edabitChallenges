// Given an array of boxes, create a function that
// returns the total volume of all those boxes
// combined together. A box is represented by an
// array with three elements: length, width and
// height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7],
// [1, 2, 1]) should return 266 since (2 x 3 x 2)
// + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

function totalVolume(...boxes) {
    let combine = 0

    for(var i=0; i < [...boxes].length; i++ ){

    const reduce = [...boxes][i].reduce((acm, crv) => {

        return  acm * crv
    })
    combine += reduce
    }

    return combine
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

totalVolume([1, 1, 1]) ➞ 1


const totalVolume = (...boxes) =>
  boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);