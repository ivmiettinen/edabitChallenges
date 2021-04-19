const array = [true, false, false, true, false]


const countTrue = r => r.filter(Boolean).length

const howMuchArray = (array) =>
    array.filter((p) => {
        return p === true
    }).length

howMuchArray(array)




///////////

// const howMuchArray = (array) => {

//     return array.filter((p) => {
//         return p === true
//     }).length



// }



// const countTrue = r => r.filter(Boolean).length