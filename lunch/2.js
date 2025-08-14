function displayEvenArray(arr) {
  const evenArray = arr.filter((element) => element % 2 == 0);
  console.log(evenArray);
let sum=0;
for (let i=0; i<evenArray.length;i++){
sum+=evenArray[i];
console.log("total array sum is:",sum)}
}

const aList = [3, 4, 6, 7, 8, 9, 10];
displayEvenArray(aList);



//1.
//create an object called  person with properties name,age,gender,city.
//write a loop to print all keys and values.
//2.Given an array of numbers ,write a functiob that sums all theevrn number in the array
//3.write prpram tht takes array of string and returns a new array containing length of each string
//4 create an array of  objects representig students(name and score).use a loop to find the student with highest score
//5.write function that takes an array of numbers and returns the product of all numbers using a loop
//6.const colours =["red","green","blue"];
//use a loop to create an object where the keys are the colours and the values are the lengths of each colour name
//7 write a function that merges two arrays into one without duplicates (no set allowed, must use a loopo)

