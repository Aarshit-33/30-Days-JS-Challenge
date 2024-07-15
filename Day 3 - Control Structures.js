// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements  --------------------------------------
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
var num = 3;
if (num == 0) {
	console.log(num + " is Zero");
} else if (num > 0) {
	console.log(num + " is Positive");
} else {
	console.log(num + " is Negetive");
} // 3 is Positive

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
var age = 20;
if (age >= 18) {
	console.log("Yes, You're eligible to vote.");
} else {
	console.log("No, You're not eligible to give vote.");
} // Yes, You're eligible to vote.

// Activity 2: Nested If-Else Statements  --------------------------------------
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
var n1 = 5;
var n2 = 4;
var n3 = 2;

if (n1 > n2) {
	if (n1 > n3) {
		console.log(n1 + " is largest among " + n2 + " & " + n3);
	} else {
		console.log(n3 + " is largest among " + n1 + " & " + n2);
	}
} else {
	if (n2 > n3) {
		console.log(n2 + " is largest among " + n1 + " & " + n3);
	} else {
		console.log(n3 + " is largest among " + n1 + " & " + n2);
	}
} // 5 is largest among 4 & 2

// Activity 3: Switch Case  --------------------------------------
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
var day = 7;
switch (day) {
	case 1:
		console.log("Sunday");
		break;
	case 2:
		console.log("Monday");
		break;
	case 3:
		console.log("Tuesday");
		break;
	case 4:
		console.log("Wednesday");
		break;
	case 5:
		console.log("Thursday");
		break;
	case 6:
		console.log("Friday");
		break;
	case 7:
		console.log("Saturday");
		break;
	default:
		console.log("Incorrect Input");
		break;
} // Saturday

// Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
var score = 90;
switch (score) {
	case 90:
		console.log("A");
		break;
	case 80:
		console.log("B");
		break;
	case 70:
		console.log("C");
		break;
	case 60:
		console.log("D");
		break;
	default:
		console.log("F");
		break;
} // A

// Activity 4: Conditional (Ternary) Operator  --------------------------------------
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
var num = 5;
var isNumOdd = num % 2 == 0 ? false : true;
if (isNumOdd) console.log(num + " is Odd");
else console.log(num + " is Even"); // 5 is Odd

// Activity 5: Combining Conditions  --------------------------------------
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
var year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
	console.log(year + " is a Leap Year");
} else {
	console.log(year + " is not a Leap Year");
} // 2020 is a Leap Year
