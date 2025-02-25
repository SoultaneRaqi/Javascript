const prompt = require('prompt-sync')();
const fs = require('fs');


function loadQuestions() {
  try{
    const data = fs.readFileSync('questions.json' , 'utf-8');
    const questions = JSON.parse(data).questions    //parse the data knraj3oha js object mn json l js object for handling
    return questions
  }
  catch (e) {
    console.log("Error occured loading file" , e);
    return [];
  }
    
}

function getRandomQuestions(questions , numQuestions) {
  if (numQuestions > questions.length){
    numQuestions = questions.length
  }

  const shuffled = questions.sort(() => {
   return 0.5 - Math.random() //random from 0 to 1
  } )
  return shuffled.slice(0 , numQuestions)
}

function askQuestion(question) {
  console.log(question.question)
  for (let i = 0; i < question.options.length; i++){
    const option = question.options[i]
    console.log(`${i + 1} - ${option}`)
  }
  const choice = parseInt (prompt("Enter your choice: ")) 
  if (isNaN(choice) || choice < 1 || choice > question.options.length){
    console.log("Invalid choice")
    return
  }
  const choiceValue = question.options[choice - 1]
  return choiceValue === question.answer
}

const numQuestions = parseInt(prompt("Enter the number of questions : "))
const questions = loadQuestions()
const randomQuestions = getRandomQuestions(questions , numQuestions )


let correct=0;
const startTime = Date.now()

for (let question of randomQuestions) {
  const isCorrect = askQuestion(question)
  console.log()
  if (isCorrect) correct++
}

const totalTime = Date.now() - startTime
console.log("You got " , correct , "out of " , numQuestions , "questions")
console.log("Total time: " ,Math.round(totalTime/1000)  , "s")
console.log("Score: " ,Math.round((correct / numQuestions) * 100)  , "%")