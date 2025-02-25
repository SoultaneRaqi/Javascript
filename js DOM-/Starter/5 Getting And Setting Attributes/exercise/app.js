// 1. Select the anchor tag
const a = document.querySelector('a');

// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute('href'));
// 3. Select a-two & set "href" attribute
const aTwo = document.querySelector('.a-two');
aTwo.setAttribute('href', 'https://www.google.com');
// setAttribute(attrName, value)
