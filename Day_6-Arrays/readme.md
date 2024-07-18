# JavaScript Arrays Practice

This repository contains a set of JavaScript tasks designed to enhance your understanding and manipulation of arrays. The exercises cover array creation, access, basic and intermediate array methods, iteration techniques, and multi-dimensional arrays.

## Activities and Tasks

### Activity 1: Array Creation and Access

1. **Task 1: Create an Array**

    - Description: Create an array of numbers from 1 to 5 and log the array to the console.

    ```javascript
    var numbers = [1, 2, 3, 4, 5];
    console.log(numbers); // [1, 2, 3, 4, 5]
    ```

2. **Task 2: Access Elements**
    - Description: Access the first and last elements of the array and log them to the console.
    ```javascript
    console.log("First element: " + numbers[0]); // First element: 1
    console.log("Last element: " + numbers[numbers.length - 1]); // Last element: 5
    ```

### Activity 2: Array Methods (Basic)

3. **Task 3: Add Element to End**

    - Description: Use the `push` method to add a new number to the end of the array and log the updated array.

    ```javascript
    numbers.push(6);
    console.log(numbers); // [1, 2, 3, 4, 5, 6]
    ```

4. **Task 4: Remove Last Element**

    - Description: Use the `pop` method to remove the last element from the array and log the updated array.

    ```javascript
    numbers.pop();
    console.log(numbers); // [1, 2, 3, 4, 5]
    ```

5. **Task 5: Remove First Element**

    - Description: Use the `shift` method to remove the first element from the array and log the updated array.

    ```javascript
    numbers.shift();
    console.log(numbers); // [2, 3, 4, 5]
    ```

6. **Task 6: Add Element to Beginning**
    - Description: Use the `unshift` method to add a new number to the beginning of the array and log the updated array.
    ```javascript
    numbers.unshift(1);
    console.log(numbers); // [1, 2, 3, 4, 5]
    ```

### Activity 3: Array Methods (Intermediate)

7. **Task 7: Double Elements**

    - Description: Use the `map` method to create a new array where each number is doubled and log the new array.

    ```javascript
    var doubledNumbers = numbers.map(function (num) {
    	return num * 2;
    });
    console.log(doubledNumbers); // [2, 4, 6, 8, 10]
    ```

8. **Task 8: Filter Even Numbers**

    - Description: Use the `filter` method to create a new array with only even numbers and log the new array.

    ```javascript
    var evenNumbers = numbers.filter(function (num) {
    	return num % 2 === 0;
    });
    console.log(evenNumbers); // [2, 4]
    ```

9. **Task 9: Calculate Sum**
    - Description: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.
    ```javascript
    var sum = numbers.reduce(function (acc, num) {
    	return acc + num;
    }, 0);
    console.log(sum); // 15
    ```

### Activity 4: Array Iteration

10. **Task 10: Iterate with For Loop**

    -   Description: Use a `for` loop to iterate over the array and log each element to the console.

    ```javascript
    for (var i = 0; i < numbers.length; i++) {
    	console.log(numbers[i]);
    } // 1 2 3 4 5
    ```

11. **Task 11: Iterate with forEach**
    -   Description: Use the `forEach` method to iterate over the array and log each element to the console.
    ```javascript
    numbers.forEach(function (num) {
    	console.log(num);
    }); // 1 2 3 4 5
    ```

### Activity 5: Multi-dimensional Arrays

12. **Task 12: Create a Matrix**

    -   Description: Create a two-dimensional array (matrix) and log the entire array to the console.

    ```javascript
    var matrix = [
    	[1, 2, 3],
    	[4, 5, 6],
    ];
    console.log(matrix); // [[1, 2, 3], [4, 5, 6]]
    ```

13. **Task 13: Access Matrix Element**
    -   Description: Access and log a specific element from the two-dimensional array.
    ```javascript
    console.log(matrix[0][1]); // 2
    ```

## Conclusion

This practice exercise covers a wide range of array-related concepts in JavaScript. By working through these tasks, you will gain a deeper understanding of array creation, access, manipulation using methods, iteration techniques, and handling multi-dimensional arrays.
