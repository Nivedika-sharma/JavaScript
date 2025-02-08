//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
//()function defination()function call
//functions that execute immediately
//used to remove the pollution that occur due to global variable
(function greet(){
    console.log("hello");
})();

// (function anotherGreet (){
//     console.log(`Namaste`);
// })()

( (Name)=>{
    console.log(`Namaste`);
})('Niv')