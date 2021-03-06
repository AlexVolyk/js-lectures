// Scope & Hoisting

/*
    Scope determines how different blocks of code can be accsessed.
        - Global
        - Block or Local
        - Function
*/

// Global scope
/*
    Our Js file, or Window object in terms of browser.
    Accessible frow every other scope
*/
let x;
console.log(x)
function addOne() {
    x = 1
}
addOne();
console.log(x);

// Function scope
// Can be accessed inside the function only!
function carname() {
    let name = 'Maserati';
    var model = "GranTurismo";
    if(true) {
        // let will not let you console.log
        // it is scoped to the enclosing block
        // let year = 2013
        var year = 2013;
        // var will let you console.log
        // scoped to enclosing function
    }
    console.log(year)
    // console.log(name);
}
carname()
// console.log(name);
// console.log(model);

// Let/Const vs Var

/* 
    Let is scoped to the immediate enclosing block of code. Let is NOT hoisted
    Var is hoisted and scoped to the immediate function block
*/


{
    // Block scope
    // let blockScopeVariable = "Block scope"
    // ReferenceError scoped to this block
    var functionScopeVariable = "Function Scope Var(iable)"
}
// In this instance function scope == global scope
// console.log(blockScopeVariable)

// Hoisting

/* 
    Js is an interpreted language that is being read top to bottom and left to right. Th parse which read the code goes over it twice. First, to hoist or assign memory location to ALL VAR(iable) declarations as well as Funtion Declarations. During the second pass, the interpreter actually read the initiliazation values and expressions that we have assigned, and executed our code.
*/

let y;
console.log(y)

// Code below results in an error because let does not get hoisted.
// console.log(z);
// let z;

// This works because var gets goisted first, before console.log executes.
console.log(a);
var a;


// First console.log returns undefined because cheese is hoisted
console.log(cheese);
var cheese = "Gouda";

// Second console.log returns "Gourda" because hoisted declaration has been reassigned the value on lone 80.
console.log(cheese);


// Hoisting & Function Declaration vs Function Expression

// This is a function declaration
// Invoking the function before creation work because function declaration is hoisting.
function helloWorld() {
    console.log("Hello World from the Hoisting Side! - Adela");
}



// This is a function invokation
// helloWorld()


let addNums = function (x, y) {
    console.log(x + y)
}
// Works (10) because function expression is created, then invoked.
addNums(5, 5)

// Arrow functions as derivatives of fx expressions are also NOT hoisted

let arr = ['Paul', 'Jessica', "Alex", "Marshall", "Foluso", "Dakota"]

arr.map((value, index) => console.log(value, index))
// elegant type of code and performance

function fun(color) {
    if (color !== 'Blue' || color !== 'green') {
        color = 'red';
    }
    return color;
};

console.log(fun())