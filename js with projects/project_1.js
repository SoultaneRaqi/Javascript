/*
== :  equal to
=== : equal value and equal type
!= : not equal
!== : not equal value or not equal type
> : greater than
< : less than
>= : greater than or equal to
<= : less than or equal to
*/

const prompt = require("prompt-sync")()
const name = prompt("What is your name: ")
console.log("Hello", name , "Welcome to the world of My Game 😘")


const shouldWePlay = prompt("Do you want to play ? ")


if (shouldWePlay.toLowerCase() === "yes") {
  //Game logic
   const leftOrRight = prompt("Choose left or right: ")
   if (leftOrRight === "left") {
     console.log("You are in a forest")
     const swimOrWait = prompt("Do you want to swim or wait: ")
     if (swimOrWait === "swim") {
       console.log("You are dead")
     } else if (swimOrWait === "wait") {
       console.log("You are alive")
     } else {
       console.log("Invalid input")
     }
   } else if (leftOrRight === "right") {
     console.log("You are in a desert")
     const walkOrRun = prompt("Do you want to walk or run: ")
     if (walkOrRun === "walk" || walkOrRun === "fuck off") {
       console.log("You are alive")
     } else if (walkOrRun === "run") {
       console.log("You are dead")
     } else {
       console.log("Invalid input")
     }
   } else {
     console.log("Invalid input")
   }


} else if (shouldWePlay.toLowerCase() === "no") {
  console.log("Ok, Goodbye!")
} else {
  console.log("Invalid input")
}



/*
&& : and
|| : or
! : not
*/