// ------------------------------------
// createElement()
const h1 = document.createElement('h1')
h1.textContent = 'Hello World'
h1.classList.add('hi') 
console.log(h1.textContent)
// appendChild()
const body = document.body
body.appendChild(h1)




// append()
let section = document.querySelector('section')
const i1 = document.createElement('i')
i1.innerText = ' ITALIC'
i1.style.color = 'red'



const span = document.createElement('span')
span.innerText = 'Soultane'
span.style.color = 'green'

section.append(i1 )


// prepend()

section.prepend(span)



// insertBefore()
const ul = document.querySelector('ul')
const newLi = document.createElement('li')
newLi.innerText = 'I m a li tag'
ul.appendChild(newLi)
const firstLi = document.querySelector('li')
   //selector.insertBefore(what,where)
ul.insertBefore(newLi,firstLi)  






/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */
const firstP = document.querySelector("p")
const i = document.createElement('i')
i.innerText = ' ITALIC'
i.style.color = 'skyblue'
firstP.insertAdjacentElement('beforeend',i)



// removeChild()
const newLIst = document.querySelector('.new-list')
const fourth = document.querySelector('.fourth')
newLIst.removeChild(fourth)


// remove() 
newLIst.remove()
// ------------------------------------
