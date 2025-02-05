// Primitive

//7 types: String ,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scoreValue=11100.3

const isLoggedIn =false
const temp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);
const bigNum=234445566456575n


//Reference Type(Non-primitive)

//array,Objects,Functions

const fruits=["mango","apple","guava"];
const obj={
    Name:"Nivedika",
    Age:20,
}

const myfn=function(){
    console.log("HELLO");
}
console.log(typeof score ,typeof scoreValue,typeof isLoggedIn,typeof temp,typeof userEmail,typeof id,typeof anotherId);

console.log(typeof fruits,typeof obj,typeof myfn);



//**********************//
//Stack(Primitive)
//Heap(Non-Primitive)
 
let Name= "Niv"
let anotherName=Name
anotherName="nivedika"
console.log(Name);
console.log(anotherName);

let user={
    email:"niv@gmail.com",
    upi:"user@bly"

}
let userTwo=user
userTwo.email="userTwo@gmail.com"
console.log(userTwo.email);
console.log(user.email);