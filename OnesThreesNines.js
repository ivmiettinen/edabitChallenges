// Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.


// This was originally a Python problem over here.
// See another Python version of this series.
// I'd suggest using getters and setters for this, but you're welcome to use any method you choose!

class OnesThreesNines {
	constructor(number) {
		this.number = number;
	}
	get ones() {
		return Math.floor(this.number / 1)
	}
	get threes(){
		return Math.floor(this.number / 3)
	}
	get nines(){
		return Math.floor(this.number / 9)
	}
}


//   class OnesThreesNines {
//     constructor(number) {
//       this.number = number;
//     }
//     get ones(){
//         return this.ones1();
//     }
//     get threes(){
//         return this.threes3();
//     }
//     get nines(){
//         return this.nines5();
//     }
 
//     ones1() {
//       return Math.floor(this.number / 1)
//     }
//     threes3() {
//       return Math.floor(this.number / 3)
//     }
//     nines5() {
//       return Math.floor(this.number / 9)
//     }
//   }

  let n1 = new OnesThreesNines(5)

  n1.ones

  const square = new OnesThreesNines(5);


square.ones()
square.threes()
square.nines()