const fruits=["Apple","Mango","Guava"]
const veg=["Potatoe", "Tomato","Cabbage"]
// veg.push(fruits)//create nested array
// console.log(veg);

// const newArr=veg.concat(fruits);//provide newArray
// console.log(newArr);

const newArray=[...fruits,...veg];///spread operator
console.log(newArray);

///flat method
const arr=[1,2,3,[4,5],6,[7,8,[9,10]]];
const anotherArray=arr.flat(Infinity)
console.log(anotherArray);

const arr1=new Array(1,2,3,4,5)
console.log(Array.isArray(arr1));
console.log(Array.from("Hitesh"));//create array


//IMPORTANT
console.log(Array.from({name:"Hitesh"}));//returns empty array if not specified what aaray to create

let num=100
let num2=200
let num3=500
console.log(Array.of(num,num2,num3));