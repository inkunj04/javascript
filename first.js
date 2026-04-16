
fullName= "Tony Stark";
age=24;
console.log(fullName);
x=null; // absent 
y=undefined; // not assigned
console.log(age);
isFollow= true;
isFollow= false;
console.log(isFollow);


// variable can be reassign and redeclare
// let and const are block scope, block means curly braces {}
//const cannot be reassign but can be redeclare

{
    let a =5;
    // let a=3; // This will throw an error because 'a' is already declared in the same block, you can create diff block and declare a variable with the same name
    console.log(a);
}

let city= "New York";
city= "Los Angeles";
console.log(city);  

let age = 24;
const pi = 3.14;
// pi = 3.14159; // This will throw an error because pi is a constant
console.log(pi);


