# Loops in JavaScript

This repository contains JavaScript programs demonstrating the use of various looping constructs. Each activity focuses on a different type of loop, including `for`, `while`, `do...while`, nested loops, and the use of loop control statements like `continue` and `break`.

## Activities and Tasks

### Activity 1: For Loop

**Task 1:** Print numbers from 1 to 10.

```javascript
for (var i = 1; i <= 10; i++) {
	console.log(i);
}
```

**Task 2:** Print the multiplication table of 5.

```javascript
for (var i = 1; i <= 10; i++) {
	console.log("5 * " + i + " = " + 5 * i);
}
```

### Activity 2: While Loop

**Task 3:** Calculate the sum of numbers from 1 to 10.

```javascript
var j = 1;
var sum = 0;
while (j <= 10) {
	sum += j;
	j++;
}
console.log("Sum of 1 to 10 : " + sum);
```

**Task 4:** Print numbers from 10 to 1.

```javascript
var k = 10;
while (k >= 1) {
	console.log(k);
	k--;
}
```

### Activity 3: Do...While Loop

**Task 5:** Print numbers from 1 to 5.

```javascript
var l = 1;
do {
	console.log(l);
} while (++l <= 5);
```

**Task 6:** Calculate the factorial of a number.

```javascript
var p = 5;
var fact = 1;
do {
	fact *= p;
} while (--p > 0);
console.log("Factorial of " + p + " is :: " + fact);
```

### Activity 4: Nested Loops

**Task 7:** Print a pattern using nested for loops.

```javascript
for (var ol = 1; ol <= 5; ol++) {
	var temp = "";
	for (var il = 1; il <= ol; il++) {
		temp += "* ";
	}
	console.log(temp);
}
```

### Activity 5: Loop Control Statements

**Task 8:** Print numbers from 1 to 10, but skip the number 5 using the `continue` statement.

```javascript
for (var m = 1; m <= 10; m++) {
	if (m == 5) {
		continue;
	}
	console.log(m);
}
```

**Task 9:** Print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement.

```javascript
for (var n = 1; n <= 10; n++) {
	if (n == 7) {
		break;
	}
	console.log(n);
}
```

## How to Run

1. Make sure you have Node.js installed.
2. Clone this repository.
3. Navigate to the directory containing the JavaScript file.
4. Run the file using Node.js:
    ```bash
    node loops.js
    ```
5. Observe the output for each task in the console.

## Conclusion

This set of tasks demonstrates the fundamental concepts of loops in JavaScript. Each task is designed to showcase different aspects and use cases of loops, including basic iteration, arithmetic operations, pattern generation, and loop control mechanisms.
