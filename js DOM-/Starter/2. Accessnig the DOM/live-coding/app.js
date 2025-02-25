// ************ DOM SELECTORS ************
// 1. getElementsByTagName
document.getElementsByTagName('h1');

// 2. getElementById
document.getElementById('main');
console.log(document.getElementById('main'));
// 3. getElementsByClassName
document.getElementsByClassName('cls');

// 4. querySelector
document.querySelector('.cls-1'); // select with css selector

// 5. querySelectorAll
document.querySelectorAll('ul li');

// ---------------------------------------
// Storing data in variables

const h1 = document.querySelector('h1');
console.log(h1)