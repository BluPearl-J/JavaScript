//how to import prompt functionaality
const prompt = require('prompt-sync')({ sigint: true });

let question = `What is the capital of France?
Options:
1. Paris
2. London
3. Berlin
4. Rome`;


let questionAnswer = prompt("What is your answer?");
console.log("Hello, " + questionAnswer);
if (questionAnswer === "1") {
  console.log("Correct!");
} else {
  console.log("wrong!correct answer is Paris.");
}




