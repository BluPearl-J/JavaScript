function elementLength(arr) {
console.log("input array is", arr);
for (let i=0; i<arr.length;i++){
i.length=arr[i];
const mapped = arr.map((i) => i.length);

console.log("output array of length of each element is:",mapped);
return mapped;
}
}
const myArray = ["dog","goat","chicken","Lion",];
let result=elementLength(myArray)
console.log(result); 










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

