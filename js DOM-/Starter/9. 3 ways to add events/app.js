// ----------- BAD WAY-----------
const secondBtn = document.querySelector('.second-btn')
secondBtn.onclick = function(){
  console.log('Soultane')
}
// ----------- GREAT WAY-----------
const best = document.querySelector('.best')

best.addEventListener('click' , function(){
  console.log('the best way to do it')
} )
// ----------- Event (e) Object -----------

const para = document.querySelector('.para')

para.addEventListener('click',(event)=>{
  console.log(event)
})



const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(input.value);
});



















// click - Fired when the element is clicked
// dblclick - Fired when the element is double-clicked
// mousedown - Fired when a mouse button is pressed down on an element
// mouseup - Fired when a mouse button is released over an element
// mousemove - Fired when the mouse moves over an element
// mouseenter - Fired when the mouse enters an element (does not bubble)
// mouseleave - Fired when the mouse leaves an element (does not bubble)
// mouseover - Fired when the mouse enters an element or its children
// mouseout - Fired when the mouse leaves an element or its children
// contextmenu - Fired when the user right-clicks (opens the context menu)
// wheel - Fired when the mouse wheel is scrolled
// keydown - Fired when a key is pressed down
// keyup - Fired when a key is released
// focus - Fired when an element gains focus (like an input field)
// blur - Fired when an element loses focus
// change - Fired when the value of an input, select, or textarea changes
// input - Fired when the user inputs data (real-time changes)
// submit - Fired when a form is submitted
// reset - Fired when a form is reset
// scroll - Fired when the user scrolls the page or an element
// resize - Fired when the window is resized
// load - Fired when the document or an image has finished loading
// beforeunload - Fired when the user is about to leave the page
// touchstart - Fired when a touch event starts (on touch devices)
// touchmove - Fired when a touch moves on the screen
// touchend - Fired when a touch event ends
// animationstart - Fired when a CSS animation starts
// animationend - Fired when a CSS animation ends
// transitionstart - Fired when a CSS transition starts
// transitionend - Fired when a CSS transition ends
