function multiplesThree(numberArray){

const numberInput=(window.prompt("Guess a Number",));

const randomNumbers=maths.random(0,15)
console.log (randomNumbers)

for (count=0;count<=15;count+3){

if(randomNumbers % 3==0){

return(randomNumbers);
}
return multiplesThree([randomNumbers]);
}
}


//Multiples of 3
//Let’s find numbers that 3 can divide perfectly, like 3, 6, 9! Make the computer
//show numbers from 3 to 15, going up by 3 each time. Save each number in a
//box and show it, like “3,” “6,” “9,” and so on. Repeat until you reach 15.
