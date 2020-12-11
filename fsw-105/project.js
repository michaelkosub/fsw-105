var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Provide the first number:");
var num2 = readlineSync.questionInt("Provide the second number:");
var enteredOperator = readlineSync.question("What do you want to perform: add/sub/mul/div?");



function calculator(num1, num2, operator){

function sum (num1, num2){
    return(num1 + num2)
}
function sub (num1, num2){
    return(num1 - num2)
}
function mul (num1, num2){
    return(num1 *  num2)
}
function div (num1, num2){
    return(num1 / num2)
}

if (enteredOperator == "add"){
console.log(num1 + num2)
}

else if (enteredOperator == "sub"){
console.log(sub(num1, num2))
}
else if(enteredOperator == "mul"){
    console.log(mul(num1, num2))
}
 else if (enteredOperator == "div"){
    console.log(div(num1, num2))
 }
}
calculator(num1,num2, enteredOperator)