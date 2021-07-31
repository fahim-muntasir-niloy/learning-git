// Day1 Assignment

//declaring variables using var
var rollNumber = 1601107;
var cGPA = 2.70; 
var studentName = "Fahim Muntasir"; 
var studentStatus = true; 

console.log(rollNumber,typeof(rollNumber));
console.log(cGPA, typeof(cGPA));
console.log(studentName, typeof(studentName));
console.log(studentStatus, typeof(studentStatus));

//using parseInt
var newVar = parseInt ("1601107")

console.log(newVar + studentName);

// creating random value
var randomNumber = Math.random() * 20

if (randomNumber>10){
    console.log(Math.floor(randomNumber));
}
else{
    console.log("less than 10");
}
