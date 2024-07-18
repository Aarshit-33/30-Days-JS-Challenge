// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration --------------------------------------
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
	if (num % 2 === 0) {
		console.log(num + " is even.");
	} else {
		console.log(num + " is odd.");
	}
}
checkEvenOdd(5); // 5 is odd.

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
	return num * num;
}
console.log("Square of 5 is " + square(5)); // Square of 5 is 25

// Activity 2: Function Expression  --------------------------------------
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
var max = function (num1, num2) {
	if (num1 > num2) {
		console.log(num1 + " is greater than " + num2);
	} else if (num1 < num2) {
		console.log(num2 + " is greater than " + num1);
	} else {
		console.log("Both numbers are equal.");
	}
};
max(5, 10); // 10 is greater than 5

// Task 4: Write a function expression to concatenate two strings and return the result.
var concat = function (str1, str2) {
	return str1 + " " + str2;
};
console.log(concat("Hello", "World!")); // Hello World!

// Activity 3: Arrow Functions --------------------------------------
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
var sum = (num1, num2) => num1 + num2;
console.log("Sum of 5 and 10 is " + sum(5, 10)); // Sum of 5 and 10 is 15

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
var containsChar = (str, char) => str.includes(char);
console.log(containsChar("Hello", "l")); // true

// Activity 4: Function Parameters and Default Values  --------------------------------------
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(num1, num2 = 1) {
	return num1 * num2;
}
console.log("Product of 5 and 10 is " + product(5, 10)); // Product of 5 and 10 is 50

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
	return "Hello, " + name + "! You are " + age + " years old.";
}
console.log(greet("XYZ", 20)); // Hello, XYZ! You are 20 years old.

// Activity 5: Higher-Order Functions  --------------------------------------
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function callNTimes(func, n) {
	for (var i = 0; i < n; i++) {
		func();
	}
}
function greet() {
	console.log("Hello!");
}
callNTimes(greet, 5);
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
	return func2(func1(value));
}
function double(num) {
	return num * 2;
}
function square(num) {
	return num * num;
}
console.log(applyFunctions(double, square, 5)); // 100
