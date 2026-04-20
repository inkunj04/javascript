
// functions

function myFunction() {
    console.log("Welcome to JavaScript functions!");
    console.log("Functions are reusable blocks of code that perform a specific task.");
    console.log("They can take input parameters and return output values.");        
}

myFunction(); // calling the function

function add(a,b){
    // this a and b are local variables, they only exist within the function
    return a+b;
}

let result=add(5,6);
console.log(result); // 11

function greet(name){
    return "Hello, " + name + "!";
}

let greeting=greet("Alice");
console.log(greeting); // Hello, Alice!

function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}   
console.log(factorial(5)); // 120   


// sum funtions

function sum (a,b){
    return a+b;
}

// arrow function
const arrowSum=(a,b)=>{
    return console.log(a+b);
};

function mult(a,b){
    return a*b;
}

const arrowMult=(a,b)=>{
    return console.log(a*b);    
}

function countVowels(str){
    const vowels = 'aeiouAEIOU';    
    let count = 0;  
    for (let char of str) { 
        if (vowels.includes(char)) {
            count++;
        }   
    }
}

// function is a first-class citizen in JavaScript, which means it can be treated like any other value.
// You can assign functions to variables, pass them as arguments to other functions, and return them from functions.

// method is a function that is a property of an object. It is called using the object it belongs to.

const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
};

person.greet(); // Hello, Alice!    
