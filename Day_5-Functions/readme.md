# JavaScript Functions Practice

This repository contains a set of JavaScript functions covering various concepts such as function declarations, function expressions, arrow functions, function parameters with default values, and higher-order functions. The purpose of this practice is to enhance your understanding and implementation of different types of functions in JavaScript.

## Activities and Tasks

### Activity 1: Function Declaration

1. **Task 1: Check Even or Odd**

    - Function: `checkEvenOdd(num)`
    - Description: Checks if a number is even or odd and logs the result to the console.

    ```javascript
    function checkEvenOdd(num) {
    	if (num % 2 === 0) {
    		console.log(num + " is even.");
    	} else {
    		console.log(num + " is odd.");
    	}
    }
    checkEvenOdd(5); // 5 is odd.
    ```

2. **Task 2: Calculate Square**
    - Function: `square(num)`
    - Description: Calculates the square of a number and returns the result.
    ```javascript
    function square(num) {
    	return num * num;
    }
    console.log("Square of 5 is " + square(5)); // Square of 5 is 25
    ```

### Activity 2: Function Expression

3. **Task 3: Find Maximum**

    - Function: `max(num1, num2)`
    - Description: Finds the maximum of two numbers and logs the result to the console.

    ```javascript
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
    ```

4. **Task 4: Concatenate Strings**
    - Function: `concat(str1, str2)`
    - Description: Concatenates two strings and returns the result.
    ```javascript
    var concat = function (str1, str2) {
    	return str1 + " " + str2;
    };
    console.log(concat("Hello", "World!")); // Hello World!
    ```

### Activity 3: Arrow Functions

5. **Task 5: Calculate Sum**

    - Function: `sum(num1, num2)`
    - Description: Calculates the sum of two numbers and returns the result.

    ```javascript
    var sum = (num1, num2) => num1 + num2;
    console.log("Sum of 5 and 10 is " + sum(5, 10)); // Sum of 5 and 10 is 15
    ```

6. **Task 6: Check if String Contains Character**
    - Function: `containsChar(str, char)`
    - Description: Checks if a string contains a specific character and returns a boolean value.
    ```javascript
    var containsChar = (str, char) => str.includes(char);
    console.log(containsChar("Hello", "l")); // true
    ```

### Activity 4: Function Parameters and Default Values

7. **Task 7: Calculate Product**

    - Function: `product(num1, num2 = 1)`
    - Description: Takes two parameters and returns their product. Provides a default value for the second parameter.

    ```javascript
    function product(num1, num2 = 1) {
    	return num1 * num2;
    }
    console.log("Product of 5 and 10 is " + product(5, 10)); // Product of 5 and 10 is 50
    ```

8. **Task 8: Greeting Message**
    - Function: `greet(name, age = 18)`
    - Description: Takes a person's name and age and returns a greeting message. Provides a default value for the age.
    ```javascript
    function greet(name, age = 18) {
    	return "Hello, " + name + "! You are " + age + " years old.";
    }
    console.log(greet("XYZ", 20)); // Hello, XYZ! You are 20 years old.
    ```

### Activity 5: Higher-Order Functions

9. **Task 9: Call Function N Times**

    - Function: `callNTimes(func, n)`
    - Description: Takes a function and a number, and calls the function that many times.

    ```javascript
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
    ```

10. **Task 10: Apply Functions Sequentially**
    - Function: `applyFunctions(func1, func2, value)`
    - Description: Takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
    ```javascript
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
    ```

## Conclusion

This practice exercise covers a wide range of function-related concepts in JavaScript. By working through these tasks, you will gain a deeper understanding of function declarations, function expressions, arrow functions, default parameters, and higher-order functions.
