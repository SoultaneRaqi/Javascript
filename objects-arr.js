// =====================================================
// JAVASCRIPT OBJECTS AND ARRAYS REFERENCE SHEET
// =====================================================

// =====================================================
// OBJECTS
// =====================================================

// Object Creation
// ---------------------------------------------------

// Object literal notation
const person = {
  name: "John",
  age: 30,
  isEmployed: true
};

// Using the Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;

// Using Object.create()
const prototype = { type: "prototype" };
const child = Object.create(prototype);

// Accessing Object Properties
// ---------------------------------------------------

// Dot notation
console.log(person.name); // "John"

// Bracket notation
console.log(person["age"]); // 30

// Dynamic property access
const propertyName = "isEmployed";
console.log(person[propertyName]); // true

// Object Methods
// ---------------------------------------------------

// Object.keys() - returns an array of a given object's own property names
const keys = Object.keys(person); // ["name", "age", "isEmployed"]

// Object.values() - returns an array of a given object's own property values
const values = Object.values(person); // ["John", 30, true]

// Object.entries() - returns an array of a given object's own [key, value] pairs
const entries = Object.entries(person); // [["name", "John"], ["age", 30], ["isEmployed", true]]

// Object.assign() - copies all enumerable own properties from one or more source objects to a target object
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source); // { a: 1, b: 4, c: 5 }

// Object.freeze() - prevents modification of existing properties and prevents properties from being added or removed
Object.freeze(person);
// person.name = "Jane"; // This won't work if object is frozen

// Object.seal() - prevents new properties from being added and marks all existing properties as non-configurable
Object.seal(car);
// car.color = "Red"; // This won't work if object is sealed

// hasOwnProperty() - returns a boolean indicating if the object has the specified property
console.log(person.hasOwnProperty("name")); // true

// Object Destructuring
// ---------------------------------------------------
const { name, age } = person; // name = "John", age = 30

// Spread operator with objects - create a shallow copy
const personCopy = { ...person };

// Merge objects with spread
const merged = { ...target, ...source };

// Object methods for property descriptors
// ---------------------------------------------------
Object.defineProperty(car, 'color', {
  value: 'red',
  writable: true,
  enumerable: true,
  configurable: true
});

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(car, 'color');

// =====================================================
// ARRAYS
// =====================================================

// Array Creation
// ---------------------------------------------------

// Array literal notation
const fruits = ["apple", "banana", "orange"];

// Using the Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Using Array.of() - better for creating arrays with a single numeric element
const mixedArray = Array.of(1, "two", true, {key: "value"});

// Using Array.from() to create arrays from array-like objects or iterables
const arrayLike = "hello";
const charArray = Array.from(arrayLike); // ['h', 'e', 'l', 'l', 'o']

// Create array with mapping function
const squares = Array.from([1, 2, 3], x => x * x); // [1, 4, 9]

// Accessing Array Elements
// ---------------------------------------------------

// By index
console.log(fruits[0]); // "apple"

// Using at() method (allows negative indices)
console.log(fruits.at(-1)); // "orange" (last element)

// Adding and Removing Elements
// ---------------------------------------------------

// push() - adds one or more elements to the end and returns the new length
fruits.push("grape"); // ["apple", "banana", "orange", "grape"]

// pop() - removes the last element and returns that element
const lastFruit = fruits.pop(); // lastFruit = "grape", fruits = ["apple", "banana", "orange"]

// unshift() - adds one or more elements to the beginning and returns the new length
fruits.unshift("strawberry"); // ["strawberry", "apple", "banana", "orange"]

// shift() - removes the first element and returns that element
const firstFruit = fruits.shift(); // firstFruit = "strawberry", fruits = ["apple", "banana", "orange"]

// splice() - changes array by removing or replacing existing elements and/or adding new elements
// syntax: array.splice(start, deleteCount, item1, item2, ...)
fruits.splice(1, 1, "kiwi", "mango"); // ["apple", "kiwi", "mango", "orange"]

// Array Iteration Methods
// ---------------------------------------------------

// forEach() - executes a provided function once for each array element
fruits.forEach(fruit => console.log(fruit));

// map() - creates a new array with the results of calling a function on every element
const upperFruits = fruits.map(fruit => fruit.toUpperCase());

// filter() - creates a new array with elements that pass the test
const longFruits = fruits.filter(fruit => fruit.length > 5);

// reduce() - applies a function against an accumulator and each element to reduce to a single value
const sum = numbers.reduce((total, num) => total + num, 0); // 15

// reduceRight() - like reduce() but works from right to left
const concatenated = ["a", "b", "c"].reduceRight((acc, current) => acc + current); // "cba"

// find() - returns the first element that satisfies the provided testing function
const found = fruits.find(fruit => fruit.startsWith('k')); // "kiwi"

// findIndex() - returns the index of the first element that satisfies the testing function
const index = fruits.findIndex(fruit => fruit === "mango"); // 2

// some() - tests whether at least one element passes the test
const hasOrange = fruits.some(fruit => fruit === "orange"); // true

// every() - tests whether all elements pass the test
const allLongNames = fruits.every(fruit => fruit.length > 3); // true if all fruit names are longer than 3 characters

// flat() - creates a new array with all sub-array elements concatenated recursively
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedArray.flat(2); // [1, 2, 3, 4, 5, 6]

// flatMap() - maps each element using a mapping function, then flattens the result
const sentences = ["hello world", "goodbye world"];
const words = sentences.flatMap(sentence => sentence.split(' ')); // ["hello", "world", "goodbye", "world"]

// Array Sorting and Manipulation
// ---------------------------------------------------

// sort() - sorts the elements of an array in place
fruits.sort(); // Sorts alphabetically

// Custom sort with compare function (ascending)
numbers.sort((a, b) => a - b);

// reverse() - reverses the elements of an array in place
fruits.reverse();

// concat() - returns a new array by merging two or more arrays
const moreFruits = ["watermelon", "pineapple"];
const allFruits = fruits.concat(moreFruits);

// slice() - returns a shallow copy of a portion of an array
// syntax: array.slice(start, end) - end is excluded
const someFruits = fruits.slice(1, 3); // Elements at index 1 and 2

// join() - joins all elements of an array into a string
const fruitString = fruits.join(", "); // "apple, kiwi, mango, orange"

// Array Information Methods
// ---------------------------------------------------

// length - property that returns the number of elements
console.log(fruits.length); // 4

// includes() - determines whether an array includes a certain value
console.log(fruits.includes("apple")); // true

// indexOf() - returns the first index at which a given element can be found
console.log(fruits.indexOf("banana")); // -1 (not in array anymore)

// lastIndexOf() - returns the last index at which a given element can be found
console.log(fruits.lastIndexOf("apple")); // 0

// isArray() - determines whether the passed value is an Array
console.log(Array.isArray(fruits)); // true

// Array Destructuring
// ---------------------------------------------------
const [first, second, ...rest] = fruits; // first = "apple", second = "kiwi", rest = ["mango", "orange"]

// Spread operator with arrays
const fruitsCopy = [...fruits]; // Creates a shallow copy
const combinedArray = [...fruits, ...moreFruits]; // Combines arrays

// Array.fill() - fills all elements with a static value
const filledArray = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// Array.from() with a range
const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

// Working with an array of objects
const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 80000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 70000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 90000 },
  { id: 4, name: "Diana", department: "HR", salary: 65000 }
];

// Filter by department
const engineers = employees.filter(emp => emp.department === "Engineering");

// Calculate average salary
const avgSalary = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;

// Group by department
const byDepartment = employees.reduce((acc, emp) => {
  acc[emp.department] = acc[emp.department] || [];
  acc[emp.department].push(emp);
  return acc;
}, {});

// Find highest paid employee
const highestPaid = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max, employees[0]);

// Create a salary report (name: salary)
const salaryReport = Object.fromEntries(
  employees.map(emp => [emp.name, emp.salary])
);

// Convert array to object with IDs as keys
const employeesById = Object.fromEntries(
  employees.map(emp => [emp.id, emp])
);

// Dynamic property access and creation
const propertyMap = {
  firstName: "name",
  dept: "department",
  income: "salary"
};

// Renaming object properties
const renamedEmployee = employees.map(emp => {
  const newEmp = {};
  for (const [newKey, oldKey] of Object.entries(propertyMap)) {
    newEmp[newKey] = emp[oldKey];
  }
  return newEmp;
})[0];

// Output: { firstName: "Alice", dept: "Engineering", income: 80000 }
console.log(renamedEmployee);