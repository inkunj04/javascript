
// for(let count=1; count<=5; count++){
//     console.log(count);
// }

// console.log("Loop ended");

// calculate sum of 1 to 5

// let sum=0;

// for (let i =0; i<=5; i++){
//     sum += i; // sum = sum + i+1
// }

// console.log("Sum of 1 to 5 is: ", sum);


// // for-of loop


// let str="hello";
// let size=0;
// for (let i of str){
//     console.log(i);
//     size
// }
// console.log("String Size: ", size);


// for-in loop

// let student={
//     name: "Rahul Kumar",
//     age: 22,
//     cgpa: 7.5,
//     isPass: true
// }

// for (let key in student){
//     console.log(key, ":", student[key], "value type: ", typeof student[key] );   
// }


// for (let i =0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


let gameNum=25;

let userNum=prompt("Guess the game Number: ");
console.log(userNum);   

while(userNum!=gameNum){
    userNum=prompt("Wrong guess! Try again: ");
    
}
console.log("Congratulations! You guessed the number correctly.");
