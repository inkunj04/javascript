
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


// forEach loop in Arrays

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) { // number means at each iteration, the current element of the array will be assigned to the variable number      
    console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5

// using arrow function with forEach
numbers.forEach(number => console.log(number));

// Output:
// 1
// 2
// 3
// 4
// 5    


let nums =[2,3,4,5,6];

nums.forEach(num => console.log(num*num)); // prints the square of each number in the array

// Output:
// 4
// 9
// 16
// 25
// 36

// MAP
let numss =[67,52,39];

numss.map(num => console.log(num*num)); // prints the square of each number in the array


// filter

let arr =[1,2,3,4,5,6,7,8,9,10];

let evenNumbers = arr.filter(num => num % 2 === 0); // filters out the even numbers from the array
console.log(evenNumbers); // [2, 4, 6, 8, 10]

let oddNumbers = arr.filter(num => num % 2 !== 0); // filters out the odd numbers from the array
console.log(oddNumbers); // [1, 3, 5, 7, 9]


// reduce
let sumOfNumbers = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // calculates the sum of all numbers in the array
console.log(sumOfNumbers); // 55

let productOfNumbers = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1); // calculates the product of all numbers in the array
console.log(productOfNumbers); // 3628800               





