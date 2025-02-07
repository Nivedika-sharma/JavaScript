let a=10;
var b=5;
const c=8;

console.log(a);
console.log(b);
console.log(c);
let g=55 //global scoped
if(true){
    let af=10;
    var bf=5; //local scoped
    const cf =8;

}
// console.log(af);//block scoped
// console.log(bf);//block scoped
//console.log(cf);//outside block


function one(){
    const username="Nivedika"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website);
    two()
}
one()


//++++++++++++++Important+++++++++++
console.log(addone(8))
function addone(num){
    return num+1
}
addone(5)
console.log(addTwo(6))//throws error for anonymous function
const addTwo=function(num){
    return num+2
}
addTwo(5)