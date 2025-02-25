const prompt = require("prompt-sync")()
/*
typeof : to know the type of the variable
isNaN : to know if the variable is a number
instanceof : to know if the variable is a object 
*/ 
function getNumber(numberStr) {
  while (true) {
    const number = parseFloat( prompt("Enter nbr" + numberStr + " : ") )
    if (isNaN(number)) {
      console.log("Invalid input")
    } else {
      return number
    }
  }

}

const number1 = getNumber("1");
const number2 = getNumber("2");


const operator = prompt("Enter Operator : ")


/*
+ : addition
- : subtraction
* : multiplication
/ : division
% : modulo
*/


let result;
let valid = true;
switch (operator) {
  case "+":
    result = number1 + number2
    break;
  case "-":
    result = number1 - number2
    break;
  case "*":
    result = number1 * number2
    break;
  case "/":
    if (number2 === 0) {
      valid = false;
      console.log("Zero Division Error")
    } 
    result = number1 / number2
    break;
  case "%":
    result = number1 % number2
    break;
  case "**":  
    result = number1 ** number2
    break;
  //case "sqrt":
    //result = Math.sqrt(number1)
    //break;    
  default:
    console.log("Invalid operator")
    valid = false;
    break;
}
if (valid) console.log(number1, operator, number2, "=", result)

/*
let i = 0;
while (i < 10) {
  i++

  if (i===5) continue      :this skip 5

  console.log(i)
}  
*/ 



