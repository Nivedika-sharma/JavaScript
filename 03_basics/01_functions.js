function hello(){
    console.log("Hello Funtion")
}
hello();

// function sum(nu1,num2){//parameteres
//     console.log(num1+num2);
// }
// result=sum(4,3)//arguments
// console.log("Result:",result);

function sum(num1,num2){//parameteres
    let result=num1+num2;
    return result
}
result=sum(4,3)//arguments
console.log("Result:",result);

function isLoggedIn(username="sam"){ //for default values
    if(username===undefined){
        console.log("Enter valid name");
        return
    }
    return `${username} just logged in`
}
console.log(isLoggedIn("hitesh"));
console.log(isLoggedIn());

function calculateCartPrice(val1,val2,...num1){    ///rest operator
    return num1
}
console.log(calculateCartPrice(200,400,559))


const user={
    username:"nivi",
    price:199
}

function handleObject(anyObject){
        console.log(`Username is ${anyObject.username

        } and price is ${anyObject.price}`);
}
handleObject(user); //objects can be passed directly

const arr=new Array(1,2,3,4,5)
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,600,788]))