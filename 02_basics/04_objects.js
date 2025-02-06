//const app=new object();
const app={}

app.id="123abc"
app.name="Nivi"
app.isLoggedIn=false
console.log(app);

const user={
    email:"niv@gmail.comm",
    fullname:{
        fisrtname:"Nivedika",
        lastname:"Sharma"
    }
}

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1,...obj2}
console.log(obj3)

const users=[
    {
        id:"5657",
        Name:"gff"
    },
    {

    },
    {

    }
]
console.log(users[1].Name);

console.log(Object.keys(app));
console.log(Object.values(app));
console.log(Object.entries(app));
console.log(app.hasOwnProperty('name'));

const course={
    name:"js",
    price:"999",
    courseInstructor:"Hitesh"
}
//course.name
const{name}=course
console.log(name)
const{courseInstructor:CI}=course
console.log(CI)

// const navbar=({company})=>{

// }
// navbar(company="hitesh")