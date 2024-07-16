// Day 4: Loops
// Tasks/Activities:

// Activity 1: For Loop  --------------------------------------
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (var i = 1; i <= 10; i++) {
	console.log(i);
} // 1 2 3 4 5 6 7 8 9 10

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (var i = 1; i <= 10; i++) {
	console.log("5 * " + i + " = " + 5 * i);
}
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

// Activity 2: While Loop  --------------------------------------
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
var j = 1;
var sum = 0;
while (j <= 10) {
	sum += j;
	j++;
}
console.log("Sum of 1 to 10 : " + sum); // Sum of 1 to 10 : 55

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
var k = 10;
while (k >= 1) {
	console.log(k);
	k--;
} // 10 9 8 7 6 5 4 3 2 1

// Activity 3: Do... While Loop  --------------------------------------
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
var l = 1;
do {
	console.log(l);
} while (++l <= 5); // 1 2 3 4 5

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
var p = 5;
var fact = 1;
do {
	fact *= p;
} while (--p > 0);
console.log("Factorial of " + p + " is :: " + fact); // Factorial of 0 is :: 120

// Activity 4: Nested Loops  --------------------------------------
// Task 7: Write a program to print a pattern using nested for loops:
for (var ol = 1; ol <= 5; ol++) {
	var temp = "";
	for (var il = 1; il <= ol; il++) {
		temp += "* ";
	}
	console.log(temp);
}
// *
// * *
// * * *
// * * * *
// * * * * *

// Activity 5: Loop Control Statements  --------------------------------------
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (var m = 1; m <= 10; m++) {
	if (m == 5) {
		continue;
	}
	console.log(m);
} // 1 2 3 4 6 7 8 9 10

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
for (var n = 1; n <= 10; n++) {
	if (n == 7) {
		break;
	}
	console.log(n);
} // 1 2 3 4 5 6
