//Arrays
/*Store homogeneous data and are resizable
Zero based inedexing*/

//Array declaration
const arr=[1,2,3,"nivedika",true]
const arr1=new Array(1,2,3,4,5)
console.log(arr1[0]);

//ArrayMethods
arr.push(6)//adds element at last
console.log(arr);

arr.pop()//remove element from last
console.log(arr);

arr.unshift(0)//adds element at front of array...not prefered because not optimized
console.log(arr);

arr.shift()//remove element from front
console.log(arr);

console.log(arr.includes(9));//element is present in the array or not

console.log(arr.indexOf(9));//-1 if not exist
console.log(arr.indexOf(3));

//join binds array into string
const newArr=arr.join();
console.log(arr);
console.log(newArr);
console.log(typeof arr);
console.log(typeof newArr);

//slice and splice
//splice manipulates the original array
console.log("A",arr);

const array=arr.slice(1,3)
console.log("B",arr);
console.log(array);

const array1=arr.splice(1,3)//remove segment from array
console.log("C",arr);
console.log(array1);


