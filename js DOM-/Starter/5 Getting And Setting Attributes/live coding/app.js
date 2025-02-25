const a = document.querySelector('a')
const input = document.querySelector('input')
// href
console.log(a.href)
// value
console.log(input.value)
// type
console.log(input.type)
// getAttribute(attrName)
console.log(input.getAttribute('type'));
console.log(input.getAttribute('placeholder'))
// setAttribute(attrName, value)
input.setAttribute('placeholder', 'Suuuuuuuuuuppppp');