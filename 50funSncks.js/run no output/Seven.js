function passwordChecker(complexString){
const stringAnswer ="secret123"; 


const passwordInput=(window.prompt("Type a Password",));
console.log("passwordInput");

if(typeof(passwordInput===stringAnswer)){
console.log("Access granted");
}
else {
console.log("Access denied");
return passwordChecker(stringAnswer);}
return passwordChecker(stringAnswer);
}




                  
//7. Password Checker
//Pretend you’re guarding a secret clubhouse! Create a locked box called
//“password” set to “secret123.” Ask the user to type a password and save it in
//a box. If it matches the locked box, say, “Access granted! Welcome!” If not,
//say, “Access denied!” Use a choice to check

