let today=new Date();
console.log(today);
console.log(today.toDateString());
console.log(today.toString());
console.log(today.toJSON());
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());
console.log(today.toISOString());

console.log(typeof today);

let mydate= new Date(2025,0,23)
console.log(mydate.toDateString());

let mydateAndTime= new Date(2025,0,23,5,8,0)
console.log(mydate.toLocaleString());

let timeStamp=Date.now()
console.log(timeStamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday:"narrow",
})
