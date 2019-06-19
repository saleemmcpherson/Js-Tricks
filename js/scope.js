"use strict"

// *************
// FUNCTIONS
// *************

// ======================================================
// Javascript allows the programmer to define a function 
// multiple different ways. Generally done by declaring 
// as a function, giving name, passing params, and code
// to be done. This particular function can be called  
// before or after function declaration and output the 
// same result. Always start with the function keyword.
// ======================================================

// myFunction(5, 20); 

// function myFunction(num1, num2){
//     let num3 = num1 + num2;
//     console.log(num1 + "+" + num2 + "=" + num3);
// }

// myFunction(5, 20);

// ======================================================
// Function expressions are declared as a variable and 
// assigned the properties of a function. This does the 
// same function as the one above but the property is  
// changed to that of a variable, so it is treated as a
// variable and cant be called before it is initialized.
// ======================================================


// // both of these statements break because we are 
// // trying to call them before initializing 
// myFunction(5, 20);
// console.log(myFunction(5,20));

// let myFunction = function(num1, num2){
//     let num3 = num1 + num2;
//     console.log(num1 + "+" + num2 + "=" + num3)
// }

// myFunction(5, 20);





// **********
// CLOSURE
// **********

// ======================================================
// This code will work because all variables declared 
// outside of the block scope are accessible without a 
// need to be passed in as parameter
// ======================================================

// let num1 = 20;
// let function1 = function(){
//     console.log(num1);
// }

// console.dir(function1);
// function1();


// =======================================================
// This code will not execute and will give function
// undefined because the function is declared within the 
// block scope of the "if" statement.
// =======================================================

// if(true){
//     let num2 = 30;
//     let function2 = function(){
//         console.log(num2)
//     }
// }

// function2();

// ======================================================
// To remedy the above code we can declare the variable
// outside of the "if" statement block and give if a 
// definition within the scope of the if statement
// ======================================================

// let function3;
// if(true){
//     let num3 = 40;
//     function3 = function(){
//         console.log(num3)
//     }
// }

// console.dir(function3);
// function3();

// ======================================================
// these variables and function are not accessible outside
// of function4. closure does not apply if the function5 
// does not use the variables. only applies to variables
// you are going to use when the function is called. In this 
// example there is a closure for both num4 and num5 because
// they with be called by function5 when function4 is called
// ======================================================

// let function4 = function(){
//     let num4 = 50;
//     let num5 = 60;
//     let function5 = function(){
//         console.log(num4);
//         console.log(num5);
//     }
//     return function5;
// }

// console.dir(function4());


