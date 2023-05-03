var readlineSync = require('readline-sync');

// Operations
let addition = function(x, y){
    return x + y;
};

let multiply = function(x, y){
    return x * y;
};

let divide = function(x, y){
    return x / y;
};

let subtract = function(x, y){
    return x - y;
};

// Questions
let nodeCalcNum1 = readlineSync.questionInt('Please enter your first number ');
let nodeCalcNum2 = readlineSync.questionInt('Please enter your second number ');
let nodeCalcOp = readlineSync.question('Please enter the operation to preform:(add, sub, mul, div):  ');

// Operation Logic
if (nodeCalcOp === "add") {
    console.log('Your result is ' + addition(nodeCalcNum1, nodeCalcNum2));
}       else if (nodeCalcOp === "sub") {
            console.log('Your result is ' + subtract(nodeCalcNum1, nodeCalcNum2));
}           else if (nodeCalcOp === "mul")  {
                console.log('Your result is ' + multiply(nodeCalcNum1, nodeCalcNum2));
}                  else if (nodeCalcOp === "div") {
                        console.log('Your result is ' + divide(nodeCalcNum1, nodeCalcNum2));
};