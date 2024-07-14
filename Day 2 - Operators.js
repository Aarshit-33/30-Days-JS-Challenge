// Day 2: Operators

// Tasks/Activities:

// Activity 1: Arithmetic Operations --------------------------------------

// Task 1: Write a program to add two numbers and log the result to the console.
var n1 = 3;
var n2 = 8;
var sum = n1 + n2;
console.log("Sum of " + n1 + " & " + n2 + " is :: " + sum); // Sum of 3 & 8 is :: 11

// Task 2: Write a program to subtract two numbers and log the result to the console.
var diff = n1 - n2;
console.log("Difference of " + n1 + " & " + n2 + " is :: " + diff); // Difference of 3 & 8 is :: -5

// Task 3: Write a program to multiply two numbers and log the result to the console.
var multi = n1 * n2;
console.log("Multiplication of " + n1 + " & " + n2 + " is :: " + multi); // Multiplication of 3 & 8 is :: 24

// Task 4: Write a program to divide two numbers and log the result to the console.
var div = n1 / n2;
console.log("Division of " + n1 + " by " + n2 + " is :: " + div); // Division of 3 by 8 is :: 0.375

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
var rem = n2 % n1;
console.log("Reaminder when " + n2 + " is devide by " + n1 + " is :: " + rem); // Reaminder when 8 is devide by 3 is :: 2

// Activity 2: Assignment Operators  --------------------------------------
// Task 6: Use the + operator to add a number to a variable and log the result to the console.
var str1 = "Hello" + 5;
console.log(str1); // Hello5 (String & number will get concatinated)

// Task 7: Use the operator to subtract a number from a variable and log the result to the console.
var str2 = "Hello" - 5;
console.log(str2); // NaN

// Activity 3: Comparison Operators  --------------------------------------
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
if (n1 < n2) {
	console.log(n2 + " is greater then " + n1);
} else {
	console.log(n1 + " is greater then " + n2);
} // 8 is greater then 3

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
if (n1 <= n2) {
	console.log(n2 + " is greater then " + n1);
} else {
	console.log(n1 + " is greater then " + n2);
} // 8 is greater then 3

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
if ("5" == 5) {
	console.log('"5" & 5 is equal');
} else {
	console.log('"5" & 5 is not equal');
} // "5" & 5 is equal

if ("5" === 5) {
	console.log('"5" & 5 is Identical');
} else {
	console.log('"5" & 5 is not Identical');
} // "5" & 5 not Identical

// Activity 4: Logical Operators --------------------------------------
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (5 < 6 && "A" > "a") {
	console.log("Both Condtions are true");
} else {
	console.log("One or more Conditions are false");
} // One or more Conditions are false

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (5 < 6 || "A" > "a") {
	console.log("One or more Condtions are true");
} else {
	console.log("All Conditions are false");
} // One or more Condtions are true

// Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
if (!(5 < 4)) {
	console.log("Condition is false");
} else {
	console.log("Condition is true");
} // Condition is false

// Activity 5: Ternary Operator  --------------------------------------
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
var is6even = 6 % 2 == 0 ? true : false;
console.log(is6even); // true
