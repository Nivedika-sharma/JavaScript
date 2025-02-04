// let score=33
// console.log(typeof score);
score="33"
console.log(typeof score);
let valueInNumber=Number(score);
console.log(typeof valueInNumber)


marks="20abc"
console.log(typeof marks);
let marksInNumber=Number(marks);
console.log(typeof marksInNumber) //gives number hence there is a problem so we need to check properly

//"33"=>33
//"23dd"=>Nan
//true=>1;false=>0

let isloggedIn=1
let booleanloggedIn=Boolean(isloggedIn);
console.log(typeof booleanloggedIn)

let num=33
let stringnum=String(num)
console.log(typeof stringnum)
console.log(typeof num)


//*************OPERATIONS**********/
let number=5
let negnum=-number
console.log(negnum)

//arithmetic
console.log(2+3)
console.log(2*3)
console.log(2/3)
console.log(2%3)
console.log(2**3)
console.log(2-3)

let str1="hello"
let str2="world"
console.log(str1 + " "+str2)

console.log(1+"2");
console.log("1"+"2"+2)
console.log(1+"2"+2)
console.log(1+2+"2")
console.log(+true)
console.log(+"")
