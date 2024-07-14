// Activity 1 :: ----------------------------------------------------------

// Task 1 ::
var num = 5;
console.log(num); // 5

// Task 2 ::
let str = "XYZ";
console.log(str); // XYZ

// Activity 2 :: ----------------------------------------------------------

// Task 3 ::
const flag = false;
console.log(flag); // false

// Activity 3 :: ----------------------------------------------------------

// Task 4 ::
let varInt = 1;
let varFlt = 1.5;
let varBool = true;
let varObj = {
	name: "ABC",
	age: 5,
};
let varArr = [5, "XYZ", 5.6, true];
let varStr = "HELLO";

console.log(varInt + " is a " + typeof varInt + " type of variable"); // 1 is a number type of variable
console.log(varFlt + " is a " + typeof varFlt + " type of variable"); // 1.5 is a number type of variable
console.log(varStr + " is a " + typeof varStr + " type of variable"); // HELLO is a string type of variable
console.log(varBool + " is a " + typeof varBool + " type of variable"); // true is a boolean type of variable
console.log(varObj + " is a " + typeof varObj + " type of variable"); // [object Object] is a object type of variable
console.log(varArr + " is a " + typeof varArr + " type of variable"); // 5,XYZ,5.6,true is a object type of variable

// Activity 4 :: ----------------------------------------------------------

// Task 5 ::

let test = "XYZ";
console.log("Initial value :: " + test); // XYZ
test = "ABC";
console.log("Reassigned value :: " + test); // ABC

// Activity 5 :: ----------------------------------------------------------

// Task 6 ::
``;
const nStr = "Hello World";
console.log("Initial value :: " + nStr); // Hello World
// nStr = "Good Morning";         // Error (TypeError - Assigning value to const type of variable)
// console.log("Reassigned value :: " + nStr);
