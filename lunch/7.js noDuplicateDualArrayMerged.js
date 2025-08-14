function elementLength(arr1, arr2 = []) {
  console.log("Input arrays:", arr1, arr2);
  arr1.push(...arr2);
  console.log("Merged array with duplicates is:", arr1);

  let newArray = [];


arr2.forEach((element) =>{
if(element!=arr1[i]){
newArray.push(element);
console.log("Merged array without duplicates is:", newArray);
};
}
//first commit .running merged with duplicates But not yet running ffine as expected
// for (let i = 0; i < arr1.length; i++) {
//for (let j = 0; j < arr2.length; j++) {
// if (arr1[i]!== arr2[j]) {
//newArray.push(arr1[i]);
//console.log("Merged array without duplicates is:", newArray);

}
  
