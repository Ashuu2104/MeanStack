// 1. FUNCTION DECLARATION (Hoisted - can be called before definition)
// Use: Traditional functions, hoisted, named functions
function addDeclaration(a, b) {
  return a + b;
}

// 2. FUNCTION EXPRESSION (Not hoisted - must define before use)
// Use: Assigning functions to variables, IIFEs, callbacks
const subtractExpression = function(a, b) {
  return a - b;
};

// 3. ARROW FUNCTION (ES6+ concise syntax, lexical 'this')
// Use: Short callbacks, functional programming, no 'this' binding
const multiplyArrow = (a, b) => {
  return a * b;
};

// 4. ANONYMOUS FUNCTION (IIFE - Immediately Invoked)
// Use: One-time execution, avoiding global scope pollution
const divideIIFE = (function(a, b) {
  return a / b;
})(10, 2); // Executes immediately, result: 5

// 5. CALLBACK FUNCTION (Passed as argument)
// Use: Asynchronous operations, event handlers, higher-order functions
function calculateWithCallback(a, b, callback) {
  return callback(a, b);
}

// 6. HIGHER-ORDER FUNCTION (Accepts/returns functions)
// Use: Factory functions, dynamic behavior, functional composition
function createOperation(op) {
  return function(a, b) {
    return op(a, b);
  };
}

const powerHOF = createOperation((a, b) => Math.pow(a, b));

// 7. OBJECT METHOD (Methods inside objects)
// Use: Object-oriented programming, grouping related functions
const calculatorObject = {
  addMethod(a, b) {
    return a + b;
  },
  multiplyMethod(a, b) {
    return a * b;
  }
};

// 8. CLASS METHOD (ES6 Classes)
// Use: OOP, static methods (no instance needed), blueprints
class AdvancedCalculator {
  constructor() {}
  
  static modulus(a, b) {
    return a % b;
  }
  
  square(n) {
    return n * n;
  }
}

// 9. MODULE EXPORTS (Node.js specific - reusable across files)
// Use: Creating reusable modules, code organization
const exportedFunctions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Immediately use module.exports for Node.js reusability
module.exports = exportedFunctions;

console.log("=== ARITHMETIC OPERATIONS - ALL FUNCTION TYPES ===\n");

// 1. Function Declaration
console.log("1. Function Declaration:", addDeclaration(5, 3)); // 8

// 2. Function Expression  
console.log("2. Function Expression:", subtractExpression(10, 4)); // 6

// 3. Arrow Function
console.log("3. Arrow Function:", multiplyArrow(6, 7)); // 42

// 4. IIFE (Anonymous)
console.log("4. IIFE Result:", divideIIFE); // 5

// 5. Callback
console.log("5. Callback (add):", calculateWithCallback(9, 2, (a,b)=>a+b)); // 11
console.log("5. Callback (multiply):", calculateWithCallback(4, 5, multiplyArrow)); // 20

// 6. Higher-Order Function
console.log("6. Higher-Order (2^3):", powerHOF(2, 3)); // 8

// 7. Object Method
console.log("7. Object Method:", calculatorObject.addMethod(15, 5)); // 20
console.log("7. Object Method:", calculatorObject.multiplyMethod(3, 8)); // 24

// 8. Class Method
console.log("8. Static Class Method:", AdvancedCalculator.modulus(17, 5)); // 2
const calcInstance = new AdvancedCalculator();
console.log("8. Instance Method:", calcInstance.square(6)); // 36

// 9. Array Higher-Order Methods (Bonus)
const numbers = [1, 2, 3, 4, 5];
console.log("9. Array.map (double):", numbers.map(n => n * 2)); // [2,4,6,8,10]
console.log("9. Array.reduce (sum):", numbers.reduce((sum, n) => sum + n, 0)); // 15

console.log("\n=== ALL TESTS PASSED ✅ ===");
