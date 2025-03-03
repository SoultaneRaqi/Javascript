/*
 * COMPLETE JAVASCRIPT GUIDE
 * =========================
 * From basics to advanced concepts
 */

//===================================================
// 1. INTRODUCTION & BASICS
//===================================================

// JavaScript is a high-level, interpreted programming language
// It's multi-paradigm, supporting functional, OOP, and event-driven styles
// It was created by Brendan Eich in 1995

// Adding JavaScript to HTML
/*
  <script>
    // Internal JavaScript
    console.log("Hello world");
  </script>

  <script src="script.js"></script>  // External JavaScript
*/

// Output and debugging
console.log("Basic output");         // Basic logging
console.error("Error message");      // Error message
console.warn("Warning message");     // Warning message
console.info("Information");         // Information message
console.table({name: "John", age: 30}); // Display object as table

// Browser dialogs
// alert("Hello!");                  // Display alert box
// let name = prompt("Enter name:"); // Get user input
// let isConfirmed = confirm("Are you sure?"); // Get confirmation (true/false)

//===================================================
// 2. VARIABLES & DATA TYPES
//===================================================

// Variable declarations
var oldWay = "Avoid using var";      // Function-scoped, hoisted (outdated)
let variable = "Modern variable";    // Block-scoped, preferred
const constant = "Can't reassign";   // Block-scoped, can't be reassigned

// Primitive Data Types
let string = "Text data";            // Strings - text
let number = 42;                     // Numbers - integers & floats
let boolean = true;                  // Booleans - true/false
let nullValue = null;                // Null - intentional absence of value
let undefinedValue;                  // Undefined - uninitialized variable
let symbolValue = Symbol("id");      // Symbol - unique identifiers
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt - large integers

// Reference Data Types
let array = [1, 2, 3, "four", true]; // Arrays - ordered collections
let object = {                       // Objects - key-value pairs
  name: "John",
  age: 30,
  isActive: true,
  greet: function() {
    return `Hello, ${this.name}`;
  }
};
let dateObj = new Date();            // Date object
let regexObj = /[a-z]+/g;            // Regular expression
let mapObj = new Map();              // Map - key-value collection
let setObj = new Set([1, 2, 3]);     // Set - unique values collection

// Type checking
typeof "string";                     // Returns "string"
typeof 42;                           // Returns "number"
typeof true;                         // Returns "boolean"
typeof undefined;                    // Returns "undefined"
typeof null;                         // Returns "object" (JavaScript quirk)
typeof Symbol();                     // Returns "symbol"
typeof {};                           // Returns "object"
typeof [];                           // Returns "object" (arrays are objects)
typeof function(){};                 // Returns "function"

// Type conversion
String(42);                          // Number to string: "42"
Number("42");                        // String to number: 42
Boolean(1);                          // To boolean: true (0, "", null, undefined, NaN are false)
parseInt("42.5");                    // String to integer: 42
parseFloat("42.5");                  // String to float: 42.5

// Template literals (ES6)
let name = "John";
let greeting = `Hello, ${name}!`;    // Interpolation
let multiline = `Line 1
Line 2
Line 3`;                             // Multi-line strings

//===================================================
// 3. OPERATORS
//===================================================

// Arithmetic operators
let sum = 5 + 3;                     // Addition: 8
let difference = 5 - 3;              // Subtraction: 2
let product = 5 * 3;                 // Multiplication: 15
let quotient = 5 / 3;                // Division: 1.6666...
let remainder = 5 % 3;               // Modulus: 2
let exponent = 5 ** 3;               // Exponentiation: 125

// Assignment operators
let x = 5;                           // Basic assignment
x += 3;                              // Addition assignment (x = x + 3)
x -= 3;                              // Subtraction assignment
x *= 3;                              // Multiplication assignment
x /= 3;                              // Division assignment
x %= 3;                              // Modulus assignment
x **= 3;                             // Exponentiation assignment

// Increment/decrement
let a = 5;
let b = a++;                         // Postfix: b = 5, a = 6
let c = ++a;                         // Prefix: c = 7, a = 7
let d = a--;                         // Postfix: d = 7, a = 6
let e = --a;                         // Prefix: e = 5, a = 5

// Comparison operators
5 == "5";                            // Equal (value): true
5 === "5";                           // Strict equal (value and type): false
5 != "5";                            // Not equal (value): false
5 !== "5";                           // Strict not equal (value and type): true
5 > 3;                               // Greater than: true
5 >= 5;                              // Greater than or equal: true
3 < 5;                               // Less than: true
3 <= 3;                              // Less than or equal: true

// Logical operators
true && false;                       // Logical AND: false
true || false;                       // Logical OR: true
!true;                               // Logical NOT: false

// Nullish coalescing operator (ES2020)
let defaultValue = null ?? "fallback";  // If null or undefined, use right side

// Optional chaining (ES2020)
let user = {};
let userName = user?.profile?.name;  // Prevents error if property doesn't exist

// Ternary operator
let status = age >= 18 ? "adult" : "minor";  // Condition ? true value : false value

// Spread operator (ES6)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];          // [1, 2, 3, 4, 5]
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };        // { a: 1, b: 2, c: 3 }

//===================================================
// 4. CONTROL FLOW
//===================================================

// Conditional statements

// if, else if, else
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

// Loops

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);                    // 0, 1, 2, 3, 4
}

// for...of loop (ES6) - iterate over values
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);                // "red", "green", "blue"
}

// for...in loop - iterate over keys/indices
let person = {name: "John", age: 30};
for (let key in person) {
  console.log(key, person[key]);     // "name John", "age 30"
}

// while loop
let counter = 0;
while (counter < 5) {
  console.log(counter);              // 0, 1, 2, 3, 4
  counter++;
}

// do...while loop
let num = 0;
do {
  console.log(num);                  // Always executes at least once: 0
  num++;
} while (num < 0);

// Breaking and continuing
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;             // Skip iteration when i is 3
  if (i === 8) break;                // Exit loop when i is 8
  console.log(i);                    // 0, 1, 2, 4, 5, 6, 7
}

//===================================================
// 5. FUNCTIONS
//===================================================

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
greet("John");                       // "Hello, John!"

// Function expression
const add = function(a, b) {
  return a + b;
};
add(5, 3);                           // 8

// Arrow function (ES6)
const multiply = (a, b) => a * b;    // Implicit return when one-liner
multiply(5, 3);                      // 15

const divide = (a, b) => {           // Regular block for multi-line
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

// Default parameters (ES6)
function greetWithDefault(name = "Guest") {
  return `Hello, ${name}!`;
}
greetWithDefault();                  // "Hello, Guest!"

// Rest parameters (ES6)
function sum(...numbers) {           // Collects all arguments into array
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4);                     // 10

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("Executed immediately");
})();

// Closures
function counter() {
  let count = 0;                     // Private variable
  return function() {                // Inner function has access to count
    return ++count;
  };
}
const increment = counter();
increment();                         // 1
increment();                         // 2

// Higher-order functions
function applyOperation(a, b, operationFn) {
  return operationFn(a, b);          // Function as argument
}
applyOperation(5, 3, (a, b) => a + b);  // 8

// Method shorthand (ES6)
const calculator = {
  add(a, b) {                        // Shorthand method definition
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

//===================================================
// 6. OBJECTS
//===================================================

// Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName() {                        // Method
    return `${this.firstName} ${this.lastName}`;
  }
};

// Accessing properties
person.firstName;                     // Dot notation: "John"
person["lastName"];                   // Bracket notation: "Doe"

// Setting properties
person.email = "john@example.com";    // Add new property
person["isActive"] = true;            // Add with bracket notation

// Object destructuring (ES6)
const { firstName, age } = person;    // Extract properties to variables
const { firstName: fName, lastName: lName } = person;  // Rename variables

// Computed property names (ES6)
const propName = "job";
const employee = {
  [propName]: "Developer",            // "job": "Developer"
  [`${propName}Level`]: "Senior"      // "jobLevel": "Senior"
};

// Object methods
Object.keys(person);                  // Array of keys: ["firstName", "lastName", "age", ...]
Object.values(person);                // Array of values: ["John", "Doe", 30, ...]
Object.entries(person);               // Array of [key, value] pairs
Object.assign({}, person, {age: 31}); // Merge objects (shallow)
Object.freeze(person);                // Make object immutable
Object.seal(person);                  // Prevent adding/removing properties

// Enhanced object literals (ES6)
const name = "Jane";
const age = 25;
const user = {
  name,                               // Same as name: name
  age,                                // Same as age: age
  greet() {                           // Method shorthand
    return `Hello, ${this.name}`;
  }
};

// Constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}
const john = new Person("John", "Doe");

// Classes (ES6)
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  
  // Method
  getDetails() {
    return `${this.name} is in grade ${this.grade}`;
  }
  
  // Static method
  static fromObject(obj) {
    return new Student(obj.name, obj.grade);
  }
  
  // Getter
  get status() {
    return this.grade > 60 ? "Passing" : "Failing";
  }
  
  // Setter
  set status(newStatus) {
    this.grade = newStatus === "Passing" ? 70 : 50;
  }
}

// Inheritance
class GraduateStudent extends Student {
  constructor(name, grade, degree) {
    super(name, grade);              // Call parent constructor
    this.degree = degree;
  }
  
  getDetails() {
    return `${super.getDetails()} pursuing ${this.degree}`;
  }
}

// Prototypes
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

//===================================================
// 7. ARRAYS
//===================================================

// Array creation
const numbers = [1, 2, 3, 4, 5];                  // Array literal
const mixed = [1, "two", { three: 3 }, [4, 5]];   // Mixed types
const newArray = new Array(1, 2, 3);              // Constructor
const filledArray = Array(5).fill(0);             // [0, 0, 0, 0, 0]

// Accessing elements
numbers[0];                          // First element: 1
numbers[numbers.length - 1];         // Last element: 5
numbers.at(-1);                      // Last element (ES2022): 5

// Adding/removing elements
numbers.push(6);                     // Add to end
numbers.unshift(0);                  // Add to beginning
numbers.pop();                       // Remove from end
numbers.shift();                     // Remove from beginning
numbers.splice(2, 1, 'a', 'b');      // Remove 1 element at index 2, insert 'a' and 'b'

// Array methods
numbers.indexOf(3);                  // Find index of element
numbers.includes(5);                 // Check if element exists
numbers.join('-');                   // Join elements: "1-2-3-4-5"
numbers.slice(1, 3);                 // Extract section: [2, 3]
numbers.concat([6, 7]);              // Combine arrays
numbers.reverse();                   // Reverse array in place
numbers.sort();                      // Sort array in place

// Iteration methods
numbers.forEach(num => console.log(num));     // Loop through array

// Transformation methods
numbers.map(num => num * 2);                  // Transform each element: [2, 4, 6, 8, 10]
numbers.filter(num => num > 2);               // Filter elements: [3, 4, 5]
numbers.reduce((sum, num) => sum + num, 0);   // Reduce to single value: 15
numbers.find(num => num > 3);                 // Find first matching element: 4
numbers.findIndex(num => num > 3);            // Find first matching index: 3
numbers.some(num => num > 4);                 // Check if any element satisfies: true
numbers.every(num => num > 0);                // Check if all elements satisfy: true

// Flattening arrays
const nested = [[1, 2], [3, 4]];
nested.flat();                               // [1, 2, 3, 4]
[1, 2, 3].flatMap(x => [x, x * 2]);         // [1, 2, 2, 4, 3, 6]

// Array destructuring (ES6)
const [first, second, ...rest] = numbers;    // first = 1, second = 2, rest = [3, 4, 5]

// Array spread operator (ES6)
const combined = [...numbers, ...rest];      // Combine arrays

//===================================================
// 8. DOM MANIPULATION
//===================================================

// Selecting elements
const element = document.getElementById("myId");             // By ID
const elements = document.getElementsByClassName("myClass"); // By class
const tags = document.getElementsByTagName("div");           // By tag
const query = document.querySelector(".myClass");            // First CSS match
const queryAll = document.querySelectorAll("div.myClass");   // All CSS matches

// Creating elements
const div = document.createElement("div");                   // Create element
div.innerHTML = "<span>Hello</span>";                        // Set inner HTML
div.textContent = "Hello";                                   // Set text (safer)

// DOM properties
element.id = "newId";                                        // Change ID
element.className = "newClass";                              // Set class
element.classList.add("active");                             // Add class
element.classList.remove("disabled");                        // Remove class
element.classList.toggle("visible");                         // Toggle class
element.classList.contains("active");                        // Check class
element.style.color = "red";                                 // Inline style
element.getAttribute("data-value");                          // Get attribute
element.setAttribute("data-value", "123");                   // Set attribute
element.removeAttribute("data-value");                       // Remove attribute
element.dataset.value = "123";                               // Dataset

// DOM traversal
element.parentNode;                                          // Parent node
element.parentElement;                                       // Parent element
element.children;                                            // Child elements
element.childNodes;                                          // Child nodes (incl. text, comments)
element.firstChild;                                          // First child node
element.firstElementChild;                                   // First child element
element.lastChild;                                           // Last child node
element.lastElementChild;                                    // Last child element
element.nextSibling;                                         // Next sibling node
element.nextElementSibling;                                  // Next sibling element
element.previousSibling;                                     // Previous sibling node
element.previousElementSibling;                              // Previous sibling element

// DOM manipulation
document.body.appendChild(div);                              // Add at end
element.insertBefore(div, element.firstChild);               // Insert before
element.insertAdjacentElement("beforebegin", div);           // Insert before element
element.insertAdjacentElement("afterend", div);              // Insert after element
element.insertAdjacentElement("afterbegin", div);            // Insert at beginning
element.insertAdjacentElement("beforeend", div);             // Insert at end
element.remove();                                            // Remove element
element.replaceWith(div);                                    // Replace element
element.innerHTML = "";                                      // Clear contents

//===================================================
// 9. EVENTS
//===================================================

// Adding event listeners
element.addEventListener("click", function(event) {
  console.log("Clicked!", event);
});

// With arrow function
element.addEventListener("mouseover", (event) => {
  console.log("Mouse over!", event.target);
});

// Removing event listeners
function handleClick(event) {
  console.log("Clicked!", event);
}
element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick);  // Must reference same function

// Common events
/*
click        - when element is clicked
dblclick     - when element is double-clicked
mousedown    - when mouse button is pressed
mouseup      - when mouse button is released
mousemove    - when mouse is moved
mouseover    - when mouse enters element
mouseout     - when mouse leaves element
keydown      - when key is pressed
keyup        - when key is released
keypress     - when key is pressed (character keys)
submit       - when form is submitted
focus        - when element receives focus
blur         - when element loses focus
load         - when page/image loads
resize       - when window is resized
scroll       - when element is scrolled
*/

// Event object properties
function handleEvent(event) {
  event.target;                       // Element that triggered event
  event.currentTarget;                // Element event listener is attached to
  event.type;                         // Event type (e.g., "click")
  event.preventDefault();             // Prevent default behavior
  event.stopPropagation();            // Stop event bubbling
  event.clientX;                      // Mouse X position (viewport)
  event.clientY;                      // Mouse Y position (viewport)
  event.key;                          // Key pressed
  event.code;                         // Physical key code
}

// Event delegation
document.querySelector("ul").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});

// Custom events
const customEvent = new CustomEvent("userAction", {
  detail: { name: "John", time: new Date() },
  bubbles: true,
  cancelable: true
});
element.dispatchEvent(customEvent);

//===================================================
// 10. ASYNCHRONOUS JAVASCRIPT
//===================================================

// setTimeout - run once after delay
const timeoutID = setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
clearTimeout(timeoutID);              // Cancel timeout

// setInterval - run repeatedly
const intervalID = setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);
clearInterval(intervalID);            // Stop interval

// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(function(data) {
  console.log(data);                  // "Data received"
});

// Callback hell (avoid this)
fetchData(function(data1) {
  processData(data1, function(data2) {
    moreProcessing(data2, function(data3) {
      evenMoreProcessing(data3, function(result) {
        console.log(result);
      });
    });
  });
});

// Promises
const promise = new Promise((resolve, reject) => {
  // Async operation
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then(result => {
    console.log(result);              // "Operation successful"
    return "Next step";
  })
  .then(nextResult => {
    console.log(nextResult);          // "Next step"
  })
  .catch(error => {
    console.error(error);             // Runs on rejection
  })
  .finally(() => {
    console.log("Done");              // Always runs
  });

// Promise methods
Promise.all([promise1, promise2, promise3])   // All promises must succeed
  .then(results => {/* results is array of all resolved values */});

Promise.race([promise1, promise2])            // First settled promise wins
  .then(result => {/* result from first settled promise */});

Promise.allSettled([promise1, promise2])      // Wait for all promises to settle
  .then(results => {/* Array of objects with status and value/reason */});

Promise.any([promise1, promise2, promise3])   // First fulfilled promise wins
  .then(result => {/* result from first fulfilled promise */});

// Async/await (ES2017)
async function fetchUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;  // Rethrow or handle
  }
}

// Using async functions
fetchUser()
  .then(user => console.log(user))
  .catch(error => console.error(error));

// Async with Promise.all
async function fetchMultipleResources() {
  const [users, products] = await Promise.all([
    fetch("https://api.example.com/users").then(r => r.json()),
    fetch("https://api.example.com/products").then(r => r.json())
  ]);
  
  return { users, products };
}

// Fetch API
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));

// POST request with Fetch
fetch("https://api.example.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com"
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

//===================================================
// 11. ERROR HANDLING
//===================================================

// try...catch
try {
  // Code that might throw an error
  throw new Error("Something went wrong");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This always runs");
}

// Error types
new Error("Generic error");
new SyntaxError("Invalid syntax");
new ReferenceError("Variable not defined");
new TypeError("Invalid type");
new RangeError("Value out of range");

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation error:", error.message);
  } else {
    console.error("Other error:", error.message);
  }
}

//===================================================
// 12. MODULES (ES6)
//===================================================

// Named exports (math.js)
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}

// Default export (user.js)
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// Import examples (app.js)
import { add, subtract, PI } from './math.js';
import User from './user.js';
import * as math from './math.js';
import { add as sum } from './math.js';

// Dynamic imports
import('./module.js')
  .then(module => {
    module.someFunction();
  })
  .catch(error => {
    console.error("Error loading module:", error);
  });

// With async/await
async function loadModule() {
  try {
    const module = await import('./module.js');
    module.someFunction();
  } catch (error) {
    console.error("Error loading module:", error);
  }
}

//===================================================
// 13. MODERN JAVASCRIPT FEATURES (ES6+)
//===================================================

// Destructuring (ES6)
const [x, y, ...rest] = [1, 2, 3, 4, 5];  // Array destructuring
const { name, age, ...remaining } = person;  // Object destructuring

// Spread operator (ES6)
const newArray = [...array1, ...array2];
const newObject = { ...obj1, ...obj2 };

// Optional chaining (ES2020)
const userName = user?.profile?.name;  // Returns undefined instead of error

// Nullish coalescing (ES2020)
const result = value ?? defaultValue;  // Returns value unless it's null/undefined

// Logical assignment (ES2021)
x ||= y;  // x = x || y
x &&= y;  // x = x && y
x ??= y;  // x = x ?? y

// BigInt (ES2020)
const bigInt = 9007199254740991n;  // n suffix creates BigInt
const result = bigInt + 1n;

// String methods
"hello".includes("el");           // true
"hello".startsWith("he");         // true
"hello".endsWith("lo");           // true
"hello".repeat(3);                // "hellohellohello"
"  hello  ".trim();               // "hello"
"hello".padStart(10, "*");        // "*****hello"
"hello".padEnd(10, "*");          // "hello*****"

// Array methods
[1, 2, 3].includes(2);             // true
[1, [2, [3]]].flat(2);             // [1, 2, 3]
[1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
Array.from("hello");               // ["h", "e", "l", "l", "o"]
Array.of(1, 2, 3);                 // [1, 2, 3]

// Object methods
Object.is(+0, -0);                 // false (unlike === comparison)
Object.values({a: 1, b: 2});       // [1, 2]
Object.entries({a: 1, b: 2});      // [["a", 1], ["b", 2]]
Object.fromEntries([["a", 1], ["b", 2]]); // {a: 1, b: 2}

// Map and Set (ES6)
const map = new Map();
map.set("key", "value");
map.get("key");
map.has("key");
map.delete("key");
map.size;

const set = new Set([1, 2, 2, 3]);  // Unique values: 1, 2, 3
set.add(4);
set.has(2);
set.delete(3);
set.size;

// WeakMap and WeakSet
const weakMap = new WeakMap();     // Keys must be objects
const weakSet = new WeakSet();     // Values must be objects

// Symbols (ES6)
const uniqueKey = Symbol("description");
const obj = {
  [uniqueKey]: "value"
};

// Symbol.iterator and generators
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();
console.log(generator.next().value);  // 1
console.log(generator.next().value);  // 2
console.log(generator.next().value);  // 3
console.log(generator.next().done);   // true

// Intl API for internationalization
new Intl.DateTimeFormat('en-US').format(new Date());  // "3/3/2025"
new Intl.NumberFormat('de-DE').format(1234.56);       // "1.234,56"
new Intl.ListFormat('en').format(['a', 'b', 'c']);    // "a, b, and c"
new Intl.RelativeTimeFormat('en').format(-1, 'day');  // "1 day ago"

//===================================================
// 14. WEB APIs
//===================================================

// Storage
localStorage.setItem("key", "value");         // Persistent storage
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();

sessionStorage.setItem("key", "value");
// sessionStorage continued
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();

// Cookies
document.cookie = "name=value; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Fetch API (more examples)
// Fetch with async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Geolocation API
navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;
    console.log(`Location: ${latitude}, ${longitude}`);
  },
  error => {
    console.error('Geolocation error:', error.message);
  }
);

// History API
history.pushState({ page: 1 }, "Title", "/new-url");
history.replaceState({ page: 1 }, "Title", "/replace-url");
window.addEventListener("popstate", event => {
  console.log("Navigation occurred:", event.state);
});

// Web Workers
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: 'some data' });
worker.onmessage = event => {
  console.log('Worker response:', event.data);
};

// worker.js
self.onmessage = event => {
  const result = performHeavyCalculation(event.data);
  self.postMessage(result);
};

// Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible');
      // Lazy load images, trigger animations, etc.
    }
  });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.target-element'));

// MutationObserver
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log('DOM changed:', mutation.type);
  });
});

observer.observe(document.body, {
  childList: true,  // Observe direct children changes
  subtree: true,    // Observe all descendants
  attributes: true  // Observe attributes
});

// ResizeObserver
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log('Element resized:', entry.contentRect);
  }
});

observer.observe(document.querySelector('.resizable'));

// WebSockets
const socket = new WebSocket('wss://example.com/socket');

socket.onopen = event => {
  console.log('Connection established');
  socket.send(JSON.stringify({ message: 'Hello!' }));
};

socket.onmessage = event => {
  console.log('Message received:', JSON.parse(event.data));
};

socket.onclose = event => {
  console.log('Connection closed:', event.code, event.reason);
};

socket.onerror = error => {
  console.error('WebSocket error:', error);
};

//===================================================
// 15. JSON HANDLING
//===================================================

// Parsing JSON
const jsonString = '{"name":"John","age":30,"isActive":true}';
const obj = JSON.parse(jsonString);
console.log(obj.name);  // "John"

// Stringify JavaScript objects
const person = { name: "John", age: 30, hobbies: ["reading", "coding"] };
const json = JSON.stringify(person);
console.log(json);  // '{"name":"John","age":30,"hobbies":["reading","coding"]}'

// Prettify JSON with indentation
const prettyJson = JSON.stringify(person, null, 2);

// Custom JSON serialization
const specialObj = {
  date: new Date(),
  regex: /pattern/,
  toJSON() {
    return {
      customDate: this.date.toISOString(),
      pattern: this.regex.source
    };
  }
};
JSON.stringify(specialObj);

// Parsing JSON with reviver
const dateJson = '{"name":"John","birthDate":"2000-01-01T00:00:00.000Z"}';
const personWithDate = JSON.parse(dateJson, (key, value) => {
  if (key === 'birthDate') return new Date(value);
  return value;
});

//===================================================
// 16. PERFORMANCE OPTIMIZATION
//===================================================

// Performance measurement
console.time('operation');
// ...some operation
console.timeEnd('operation');  // "operation: 1.23ms"

// Performance API
performance.mark('start');
// ...some operation
performance.mark('end');
performance.measure('operation', 'start', 'end');
const measurements = performance.getEntriesByType('measure');
console.log(measurements);

// Debounce - limit function calls
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedResize = debounce(() => {
  console.log('Resize event handled');
}, 300);

window.addEventListener('resize', debouncedResize);

// Throttle - limit function call frequency
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

const throttledScroll = throttle(() => {
  console.log('Scroll event handled');
}, 300);

window.addEventListener('scroll', throttledScroll);

// Lazy loading images
document.querySelectorAll('img[data-src]').forEach(img => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img.src = img.dataset.src;
        observer.disconnect();
      }
    });
  });
  observer.observe(img);
});

// Memory management
// Avoid memory leaks
function addListener() {
  const button = document.querySelector('button');
  const handleClick = () => console.log('Clicked');
  button.addEventListener('click', handleClick);
  
  // Store reference to remove later
  return () => button.removeEventListener('click', handleClick);
}
const cleanup = addListener();
// Later: cleanup();

//===================================================
// 17. DESIGN PATTERNS
//===================================================

// Module Pattern
const calculator = (function() {
  // Private variables
  let result = 0;
  
  // Public interface
  return {
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

calculator.add(5).subtract(2).getResult();  // 3

// Singleton Pattern
const Singleton = (function() {
  let instance;
  
  function createInstance() {
    return { data: 'Singleton instance' };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);  // true

// Factory Pattern
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, I'm ${this.name}`;
    }
  };
}

const john = createPerson('John', 30);
const jane = createPerson('Jane', 25);

// Observer Pattern
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }
  
  off(event, listener) {
    if (!this.events[event]) return this;
    this.events[event] = this.events[event]
      .filter(l => l !== listener);
    return this;
  }
  
  emit(event, ...args) {
    if (!this.events[event]) return this;
    this.events[event].forEach(listener => {
      listener.apply(this, args);
    });
    return this;
  }
}

const emitter = new EventEmitter();
emitter.on('userCreated', user => console.log('User created:', user));
emitter.emit('userCreated', { name: 'John' });

//===================================================
// 18. TESTING
//===================================================

// Basic unit test (pseudocode)
function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}: ${error.message}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    }
  };
}

// Example test
test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

// Jest-like testing (pseudocode)
describe('Calculator', () => {
  beforeEach(() => {
    // Setup
  });
  
  afterEach(() => {
    // Teardown
  });
  
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  test('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });
});

//===================================================
// 19. SECURITY BEST PRACTICES
//===================================================

// Content Security Policy
// <meta http-equiv="Content-Security-Policy" content="default-src 'self';">

// Sanitize user input
function sanitizeHTML(string) {
  const temp = document.createElement('div');
  temp.textContent = string;
  return temp.innerHTML;
}

// Prevent XSS
const userInput = '<script>alert("XSS")</script>';
const safeInput = sanitizeHTML(userInput);
element.innerHTML = safeInput;  // Safely rendered

// Use HttpOnly cookies
// Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict

// Don't store sensitive data
// Bad:
localStorage.setItem('token', 'secret-jwt-token');
// Better:
// Use HTTP-only cookies or session storage for short-lived tokens

// Validate form inputs
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//===================================================
// 20. MODERN FRAMEWORKS OVERVIEW
//===================================================

// React example (pseudocode)
function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Vue example (pseudocode)
const app = Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  `
});

// Angular example (pseudocode)
@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  `
})
class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}

//===================================================
// 21. TOOLS AND ECOSYSTEM
//===================================================

// Package managers
// npm init
// npm install package-name
// npm install package-name --save-dev
// yarn add package-name
// yarn add package-name --dev

// Bundlers
// webpack.config.js (basic)
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

// Transpilers (Babel)
// .babelrc
{
  "presets": ["@babel/preset-env"]
}

// ESLint
// .eslintrc.js
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  }
};

//===================================================
// 22. CONCLUSION
//===================================================

// JavaScript continues to evolve with new features and improvements
// ES modules, async/await, and modern APIs have transformed development
// Understanding core concepts helps when learning frameworks
// Stay updated with the language evolution and new web standards
// Practice by building small projects that increase in complexity
// Join communities to share knowledge and learn from others