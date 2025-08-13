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

let question2 = `2.What is the capital of Nigeria?
Options:
1. Lagos
2. Benin
3. Abuja
4. Porthacourt`;


let Answer = prompt("What is your answer?");
console.log("Hello, " + Answer);
if (Answer === "3") {
  console.log("Correct!");
} else {
  console.log("wrong!correct answer is Abuja.");
}

let question3 = `3. What colour of the spectrum absorbs all colours?
Options:
1. Red
2. Green
3. White
4. Black`;


let Answer3 = prompt("What is your answer?");
console.log("Hello, " + Answer3);
if (Answer3 === "1") {
  console.log("Correct!");
} else {
  console.log("wrong!correct answer is Black.");
}

let question4 = `4. Which musical artist is a twenty four times grammy award winner?
Options:
1. Shakira
2. Beyounce
3. Mariah carrey
4. Kelly Rowland`;


let Answer4 = prompt("What is your answer?");
console.log("Hello, " + Answer4);
if (Answer4 === "1") {
  console.log("Correct!");
} else {
  console.log("wrong!correct answer is Beyounce.");
}

let question5 = `5. Which is the most popular language for android development?
Options:
1. Python
2. Java
3. C++
4. C#`;


let Answer5 = prompt("What is your answer?");
console.log("Hello, " + Answer5);
if (questionAnswer === "3") {
  console.log("Correct!");
} else {
  console.log("wrong!correct answer is Java.");
}

let question6 = `6. Who is the greatest footballer in the world?
Options:
1. Messi
2. Ronaldinho
3. Mbappe
4. Ronaldo Al Nassr`;


let Answer6 = prompt("What is your answer?");
console.log("Hello, " + Answer6);
if (questionAnswer === "1") {
  console.log("Correct!");
} else {
  console.log("wrong!correct answer is Messi the greatest of the greatest walking living legend.");
}





