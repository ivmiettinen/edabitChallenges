// Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that adds the correct parity bit to a binary string.

function addParityBit(b) {
	let split = b.split('')
    console.log('split', split)
    console.log('splitLength', split.length)


   
    let helperNum = 0;

    for(var i=0; i < split.length; i++){

        console.log('iii', i)

        console.log('splitArray', split[i])

    

        if(split[i] === '1'){
            console.log('AAAAA', split[i])
            helperNum = helperNum++
            console.log('HelperNumIF', helperNum)
        }
        console.log('helperNum sisällä', helperNum)
        
    }

    // console.log('helperNum', helperNum)
}

addParityBit("0110000")