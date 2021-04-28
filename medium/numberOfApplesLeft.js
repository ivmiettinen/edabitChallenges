// A man has n number of apples. If he eats a percentage p of the 
// apples (if apples are available), his children will share the 
// remainder of the apples. Create a function to determine the 
// number of whole apples his children got. If his children did 
// not get any apples, return "The children didn't get any apples".



function getNumberOfApples(number, percentage) {

    let toNumber = parseInt(percentage)

    console.log('toNumber', toNumber)

   let per = number * (parseInt(percentage)/ 100)

   console.log('per', per)

   let sum = Math.floor(number - per)

   console.log('sum', sum)

	
}


getNumberOfApples(25, "10%")


// Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!'