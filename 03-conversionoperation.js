// CONVERSION CASE STUDY


let score = "33abx"

console.log(typeof score);

let valueInNUmber = Number(score)
console.log( valueInNUmber)

// when you try to conver "33" which is a string=>it get converted to 33 which is a number.
//but when we try to convert 33abc => Nan
// true =>1;  false =>0;
// WHEN YOU TRIED TO CONVERT ABOVE NUMBER IT CAN BE CONVERTED ... BUT YOU CAN NOT CHANGE ITS TYPE.
 let isLoggedIn = 1

 let BooleanIsLoggedIN= Boolean(isLoggedIn)
 console.log(BooleanIsLoggedIN)

 // IN THIS INVESATIGATION STUDY I FIND OUT THAT WHEN YOU TRY TO CONVERT 1 => TRUE IN BOOLEAN 
 // BUT WHEN YOU TYPE 0=> FALSE 
 //"" => FALSE 
// "KAPEED"=> TRUE .


// **************************************************OPERATIONS*****************************************************************************

let value=3

let negValue = -value

console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**5);
// console.log(2%3);


let str1= "hello"
let str2= " kapeed "

let str3 = str1+str2;
console.log(str3)

console.log((3+4) * 5%4);

console.log(+true);
console.log(+"");

let num1 ,num2 ,num3

num1 =num2 =num3=2+2

let gamecounter =100
//++gamecounter;  this also works 
gamecounter++; // this too
console.log(gamecounter)