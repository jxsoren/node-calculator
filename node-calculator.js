var readlineSync = require('readline-sync');

// //---------------------------------------------------------------// 
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
//     console.log('Hi ' + userName + '!');
 
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
//     console.log('Oh, ' + userName + ' loves ' + favFood + '!');
// // --------------------------------------------------------------//

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

let nodeCalcNum1 = readlineSync.questionInt('Please enter your first number ');

let nodeCalcNum2 = readlineSync.questionInt('Please enter your second number ');

let nodeCalcOp = readlineSync.question('Please enter the operation to preform:(add, sub, mul, div):  ');


if (nodeCalcOp === "add") {
    console.log('Your result is ' + addition(nodeCalcNum1, nodeCalcNum2));
}       else if (nodeCalcOp === "sub") {
            console.log('Your result is ' + subtract(nodeCalcNum1, nodeCalcNum2));
}           else if (nodeCalcOp === "mul")  {
                console.log('Your result is ' + multiply(nodeCalcNum1, nodeCalcNum2));
}                  else if (nodeCalcOp === "div") {
                        console.log('Your result is ' + divide(nodeCalcNum1, nodeCalcNum2));
};




// let addNum = readlineSync.questionInt('what number would you like me to add to the second? ');

// let addNumTwo = readlineSync.questionInt('what number would you like me to add to the first? ');

// console.log('Your result is ' + addition(addNum, addNumTwo) );

//---------------------------------------------------------------//



// let multNumOne = readlineSync.questionInt('what number would you like me to multiply to the second? ');

// let multNumTwo = readlineSync.questionInt('what number would you like me to multiply to the first? ');

// console.log('Your result is ' + multiply(multNumOne, multNumTwo) ); 

//---------------------------------------------------------------//



// let divNumOne = readlineSync.questionInt('what is the first number you would like me to divide by? ');

// let divNumTwo = readlineSync.questionInt('what is the second number you would like me to divide by the first? ');

// console.log('Your result is ' + divide(divNumOne, divNumTwo) ); 

//---------------------------------------------------------------//



// let subNumOne = readlineSync.questionInt('what is the first number you would like me to subtract to the second? ');

// let subNumTwo = readlineSync.questionInt('what is the second number you would like me to subtract to the first? ');

// console.log('Your result is ' + subtract(subNumOne, subNumTwo) ); 

//---------------------------------------------------------------//

