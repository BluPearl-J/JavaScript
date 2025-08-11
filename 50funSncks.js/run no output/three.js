function getNumber(number){

const favouriteNumber =7;

const numberInput=(window.prompt("Guess a Number",));
if(numberInput==7){
console.log("Thats my favourite number");
}
else{
console.log("Nice Try,guess again");
}
return getNumber(numberInput);
}



