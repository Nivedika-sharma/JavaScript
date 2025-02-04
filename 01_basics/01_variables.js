const accountId = 14453//cannot be modified nor redeclared
let accountEmail= "niv@gmail.com" //can be modified but not redeclared
var accountPassword ="2553454" //can be redeclared and modified but prefer not to use due to issue in functional and block scope
accountCity ="Jaipur" 
let accountState;

accountID=1 // cannot modify

console.log(accountId);

accountEmail="gfhf@gmail.com"

console.log(accountEmail);

accountPassword="577"

console.log(accountPassword);

accountCity="Bangaluru"

console.log(accountCity);

console.table([accountState,accountEmail,accountPassword,accountId,accountCity]);