function inBox(arr) {

    


  let stringi =  arr.toString() 
  
  console.log('arr', arr.toString())

   let toStringAndReplace = stringi.split('').toString()

   .replace(/,/g, '')
  
   let uusiARray = new Array(toStringAndReplace)
  
   console.log('uusiARray', uusiARray)
  
   console.log('arrrrrr', toStringAndReplace)
   console.log('arrrrrr lengthi', toStringAndReplace.length)

   console.log('indexi', toStringAndReplace[4])

    const star =  "*"

    const doesItInclude =  toStringAndReplace.includes(star)

    console.log('AAAA', toStringAndReplace.length)

    for(let i=0; i < toStringAndReplace.length; i++){
        console.log('toStringAndReplace[i]', toStringAndReplace[i])
        if(toStringAndReplace[i] % 2 === 0){
           console.log('toStringAndReplace.includes(star)', toStringAndReplace[i].includes(star)) 
        }else{
            console.log('ei ole jaollinen')
        }
    }

    // console.log('isIt', toStringAndReplace.includes(star))
    // console.log('jaollisuus', toStringAndReplace[doesItInclude] % 2 === 0)
	
}

inBox([
    "###",
    "#*#",
    "###"
  ])