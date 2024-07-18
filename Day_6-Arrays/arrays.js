// Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access  --------------------------------------
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
var numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("First element: " + numbers[0]); // First element: 1
console.log("Last element: " + numbers[numbers.length - 1]); // Last element: 5

// Activity 2: Array Methods (Basic)  --------------------------------------
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log(numbers); // [2, 3, 4, 5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4, 5]

// Activity 3: Array Methods (Intermediate)  --------------------------------------
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
var doubledNumbers = numbers.map(function (num) {
	return num * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
var evenNumbers = numbers.filter(function (num) {
	return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
var sum = numbers.reduce(function (acc, num) {
	return acc + num;
}, 0);
console.log(sum); // 15

// Activity 4: Array Iteration --------------------------------------
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (var i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
} // 1 2 3 4 5

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
numbers.forEach(function (num) {
	console.log(num);
}); // 1 2 3 4 5

// Activity 5: Multi-dimensional Arrays --------------------------------------
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
var matrix = [
	[1, 2, 3],
	[4, 5, 6],
];
console.log(matrix); // [[1, 2, 3], [4, 5, 6]]

// Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[0][1]); // 2
