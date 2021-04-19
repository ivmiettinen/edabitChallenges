
//esimerkkiratkaisu:

const apple = 'apple'
const func1 = (string) => () => string

func1(apple)



//Oma:

function func1(string) {
    function func2() {
        return string
    }

    return func2
}

func1(apple)






////////////////////

// const apple = 'apple'

// function func1(string) {
   

//     function func2() {
//         return string
//     }

//     return func2()
// }

// func1(apple)
