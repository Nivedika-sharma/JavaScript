const userEmail="niv@gmail.com"
if(userEmail){
    console.log("got user email")
}else{
    console.log("Don't have user email")
}
//..................................................................

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN;


//TRUTHY VALUES
//"0",'false'," ",[],{},funcion(){}
if(userEmail.length===0){
    console.log("array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


//.................IMPORTANT....................
//false==0  false=='' 0==''  all are true

//............Nullish coalescing operator(??):numm undefined
let val1;
val1=null??10
val1=5 ??10;

console.log(val1);

//Ternary Operator

//condition?true:false