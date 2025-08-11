function towerStars(numberArray){
const stringStar="*"
for(let count=1; count<6;count++){
console.log(stringStar(count));
const answer = towerStars(stringStar(count));
return answer;
}
}

//Looping Stars
//Draw a tower of stars! Make the computer show a star (*) on 5 different lines,
//one star per line. Use a box to count how many times you’ve shown a star
//and repeat 5 times.
