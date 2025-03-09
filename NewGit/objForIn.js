// Define an object `object1` to store key-value pairs (names and marks).
const object1 = { harry: 98, rohan: 90, aakash: 43 };

// Use a `for-in` loop to iterate over the keys (names) in `object1`.
for (let k in object1) {
  console.log("Name:", k, "Marks:", object1[k]);
  // Logs each key (name) and its corresponding value (marks) to the console.
}

// Define variables using `const` for immutability.
const b = "banana"; // A string value.
const c = "AAA"; // Another string value.

// Define an array `n` with strings and variables.
const n = ["apple", b, c, "hello"];
console.log(n.reverse().sort());
// Reverse the order of the array and then sort it alphabetically.
// Note: `reverse()` modifies the array in-place, while `sort()` arranges it alphabetically.

// Use `Array.from()` to convert object values into an array.
const objectValues = Array.from(Object.values(object1));
console.log(objectValues);
// `Object.values(object1)` extracts values (marks) into an array, and `Array.from()` ensures it's converted correctly.

// Prompt the user to enter their name (works in browsers; replaced with a hardcoded string for Node.js environments).
let userName = "John Doe"; // Replace with prompt in a browser: `prompt("Enter your name:")`.
objectValues.push(userName);
// Adds the user's name as a new element to the `objectValues` array.
console.log(objectValues); // Logs the updated array with the new entry.

// Demonstrating shorthand property assignment in object literals.
const a = "the", b2 = "no"; // Renamed `b` to avoid naming conflicts.
const obj2 = { a, b: b2 }; // Shorthand assigns the variable names as keys and their values as object properties.
console.log(obj2);

// Define a variable `k` and an array with mixed elements, including `k`.
let k = 999;
let numbers = [1, 2, 3, 4, 45, 64, 454, k, 5]; // Removed empty slot for better consistency.

// Filter the array to extract elements greater than 5.
let filteredNums = numbers.filter(function (value) {
  return value > 5; // The callback function checks if the value is greater than 5.
});
console.log(filteredNums); // Logs the filtered array.

// Define a function `abcd` that uses `this` to demonstrate context binding.
function abcd(a, b, c, d) {
  console.log(this); // Logs the object context in which the function is called.
  return a + b + c + d; // Returns the sum of four arguments.
}

// Bind the function to an object using `.apply()` and call it with an array of arguments.
let obj3 = { name: "helloo" }; // Object to be used as the context for the function.
let newFunc = abcd.apply(obj3, [1, 2, 3, 5]);
console.log(newFunc); // Logs the sum of the arguments passed to the function: 1 + 2 + 3 + 5.

// Define a global variable `val` and a function `calc` to modify it.
let val = 0; // Initialized to 0.
function calc(x) {
  val++; // Increments the global `val` variable by 1.
  return x * 2; // Returns the double of the input `x`.
}
let result = calc(10); // Calls the function with an argument `10`.
console.log(val); // Logs the updated value of `val` (1 after one call).
console.log(result); // Logs the result of the function (20 for input `10`).

// Define a function `myAdder` to manipulate arrays.
function myAdder(arr) {
  arr[1]++; // Increments the second element of the array (0-based index).
  console.log("Modified inside function:", arr); // Logs the modified array.
}

// Create an array using the Array constructor.
let array1 = [1, 3, 2, 5];
console.log(array1.concat(array1)); // Concatenates the array with itself and logs the result.
myAdder(array1); // Calls `myAdder` with the array, demonstrating mutation.

// Create and sort an array with mixed types (strings and numbers).
const sortedArray = ["test", 1, 2, 3, -1, -2, -3].sort((a, b) => a - b);
// The custom sort function ensures numerical sorting rather than default lexicographical sorting.
console.log(sortedArray); // Logs the sorted array in ascending numerical order.
