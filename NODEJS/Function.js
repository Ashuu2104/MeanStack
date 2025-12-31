// Anoynimus Function Example
// This function is assigned to a variable

const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5

// Arrow Function Example
// This is a more concise syntax for writing functions

const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // Output: 6

// Named Function Example
// This function has a name and can be called by that name
function subtract(a, b) {
    return a - b;
}

console.log(subtract(5, 3)); // Output: 2

// Immediately Invoked Function Expression (IIFE) Example
// This function runs as soon as it is defined

(function() {
    console.log("This function runs immediately upon definition!");
})();

// Function with Default Parameters Example
// This function has a default value for its parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

// Function with Rest Parameters Example
// This function can take an arbitrary number of arguments
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}  
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30


const squ = (x) => x * x;
console.log(squ(4)); // Output: 16

//callback function example
// A callback function is passed as an argument to another function and is executed after some operation is completed.
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Received:", data); // Output: Received: Sample Data
});
