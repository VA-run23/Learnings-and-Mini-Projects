// Create an array `a` with numerical values.
let a = [1, 2, 3, 4, 5];

// Create a new array `b` using the spread operator to clone `a`.
let b = [...a];

// Remove the last element from array `b` using `pop()`.
b.pop();
console.log("Original array `a` is", a); // Logs `[1, 2, 3, 4, 5]`, as `a` remains unaffected.
console.log("Cloned array `b` is", b);  // Logs `[1, 2, 3, 4]`, reflecting the change.

// Now let's explore what happens when `b` references `a` directly.
a = [1, 2, 3, 4, 5];
b = a; // Directly reference `a` in `b`.

b.pop(); // Removes the last element from both `a` and `b` since they reference the same array.
console.log("Array `a` is", a); // Logs `[1, 2, 3, 4]`, reflecting the change.
console.log("Array `b` is", b); // Logs `[1, 2, 3, 4]` since `b` shares the same reference.

// Use `forEach` to iterate over array elements and modify output.
let a2 = [1, 2, 3, 4, 5, 6];
a2.forEach((value) => {
  console.log(value + 5); // Logs each array element incremented by 5.
});
console.log(a2); // Logs the original array `[1, 2, 3, 4, 5, 6]`, as `forEach` does not modify the array in-place.

// Create an object `obj` with key-value pairs.
let obj = {
  name: "abcd",
  age: 1,
  city: "bombay",
};

// Use a `for-in` loop to iterate over the object's properties.
for (let key in obj) {
  console.log(key, obj[key]); // Logs each key and its corresponding value.
}

// Demonstrate an Immediately Invoked Function Expression (IIFE) with private data.
let ans = (function () {
  let privateVal = 23; // A private variable inaccessible from outside.
  return {
    getter: function () {
      console.log(privateVal); // Logs the current value of `privateVal`.
    },
    setter: function (val) {
      privateVal = val; // Updates the value of `privateVal`.
    },
  };
})();

ans.getter(); // Logs `23`, the initial value.
ans.setter(42); // Updates the private value to `42`.
ans.getter(); // Logs `42`, reflecting the updated value.

// Define an object `hello` with key-value pairs.
let hello = {
  key1: "g",
  b: "bye",
};
console.log(hello); // Logs the object `{ key1: 'g', b: 'bye' }`.

// Define an array and demonstrate the `bind()` method for functions.
let arr = [1, 2, 3, 4];

// Define a function `abcd` that logs the current `this` context.
function abcd() {
  console.log(this);
}

// Create an object `obj` to use as the `this` context.
let obj2 = { age: 23 };

// Use `bind()` to create a new function with `this` set to `obj2`.
let bindedFnc = abcd.bind(obj2);
bindedFnc(); // Logs `{ age: 23 }`, as `this` refers to `obj2`.
