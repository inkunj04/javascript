
// collection of data items stored at contiguous memory locations
// can store multiple values in a single variable
// can be of any data type
// can be of fixed or dynamic size

// creating an array
let arr = [1, 2, 3, 4, 5];

// accessing array elements
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // 5

// modifying array elements
arr[0] = 10;
console.log(arr[0]); // 10

// array length
console.log(arr.length); // 5

// adding elements to an array
arr.push(6);
console.log(arr); // [10, 2, 3, 4, 5, 6]

// removing elements from an array
arr.pop();
console.log(arr); // [10, 2, 3, 4, 5]

// iterating over an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for-of loop
for (let element of arr) {
    console.log(element);
}

// for-in loop
for (let index in arr) {
    console.log(index, ":", arr[index]);
}                           

let heroes =["ironman", "captain america", "thor", "hulk", "black widow"];

for (let hero of heroes){
    console.log(hero);
}
// or
for (let idx=0; idx<heroes.length; idx++){
    console.log(heroes[idx]);
}   


let marks=[85, 90, 78, 92, 88];

let sum=0;

for (let mark of marks){
    sum +=mark;
}

let avg= sum/marks.length;

console.log(`Average marks: ${avg}`);


// push() -> method, adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.

// pop() -> method, removes the last element from an array and returns that element. It modifies the original array.

// toString() -> method, returns a string representing the array and its elements. It does not modify the original array. The elements are converted to strings and separated by commas in the resulting string.

// shift() -> method, removes the first element from an array and returns that element. It modifies the original array.

// unshift() -> method, adds one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array.     

// slice(start, end) -> method, returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified. If the end index is not provided, it will slice until the end of the array.     

// splice(start, deleteCount, item1, item2, ...) -> method, changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array. The start parameter specifies the index at which to start changing the array. The deleteCount parameter specifies the number of elements to remove from the array. The item1, item2, ... parameters specify the elements to add to the array at the start index. If no elements are specified, splice will only remove elements from the array. If deleteCount is not specified, it will remove all elements from the start index to the end of the array. 

// create an array to store companies 
// remove first company from the array, remove uber and add ola in its place, add amazon at the end

let companies = ["Google", "Facebook", "Amazon", "Uber", "Microsoft"];

companies.shift(); // removes "Google"
console.log(companies); // ["Facebook", "Amazon", "Uber", "Microsoft"]

companies.splice(2, 1, "Ola"); // removes "Uber" and adds "Ola" at index 2
console.log(companies); // ["Facebook", "Amazon", "Ola", "Microsoft"]

companies.push("Amazon"); // adds "Amazon" at the end of the array
console.log(companies); // ["Facebook", "Amazon", "Ola", "Microsoft", "Amazon"] 



