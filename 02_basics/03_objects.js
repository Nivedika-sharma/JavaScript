//objects can be declared in two forms Literal or Constructor
//Singleton :when formed with literals singleton is created otherwise not

//OBJECT LITERALS
const sym=Symbol("key1")

const user={
    name:"Nivi",
    age:20,
    [sym]:"mykey1",
    location:"Jaipur",
    email:"niv@gmail.com",
    isLoggedin:false,
    lastLogindays:["mon","tues","wed"]
}

console.log(user["name"]);
console.log(user["email"]);
console.log(user[sym]);

user.name="Nivedika"
// Object.freeze(user);
user.name="Nivedika sharma"
console.log(user);

user.greet=function(){
    console.log("Hello User")
}
console.log(user.greet)

user.greet1=function(){
    console.log("Hiii,$(this.name)")
}
console.log(user.greet1)