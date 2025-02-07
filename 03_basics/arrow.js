//current context
const user={
    userName:"Nivedika",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.userName} welcome to website`);
        console.log(this)
    }
}
user.welcomeMsg()
user.userName="sam"
user.welcomeMsg()

//this doesnot work inside functions

// const greet=()=>{
//     let userName="Ritesh"
//     console.log(this)
//  }


//  const add=(num1,num2)=>{
//     return num1+num2
//  }

const add=(num1,num2)=>(num1+num2) //Implicit return
console.log(add(6,7))

const add1=(num1,num2)=>({userName:"Nivi"}) //Implicit return
console.log(add(6,7))