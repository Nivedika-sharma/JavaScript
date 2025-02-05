const name="Nivedika"
const surname="Sharma"
//console.log(name+surname+"Value");

//Sring Interpolation

console.log(`hello my name is ${name}  ${surname}`);

const gameName =new String ('subwaysurf');
//String methods
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString= gameName.substring(0,7)
console.log(newString);

const newString2= gameName.slice(-4,7)
console.log(newString2);

const newString3= "         ffvf     "
console.log(newString3);
console.log(newString3.trim())


const url="https://hitesh.com"
console.log(url.replace('sh',"...."));

const str="helloworld hii halo"
console.log(str.includes('world'));
console.log(str.split(' '));

