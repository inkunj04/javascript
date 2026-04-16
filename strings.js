
// let str="Kunj";
// let str2='Kumar';
// let str3=`My name is ${str} ${str2}`;

// console.log(str);
// console.log(str2);
// console.log(str3);
// console.log(str[0]);


// console.log(str.length); // property
// console.log(str.toUpperCase()); // method
// console.log(str.toLowerCase()); // method
// console.log(str.includes("kunj")); // method
// console.log(str.includes("Kunj")); // method
// console.log(str.charAt(0)); // method
// console.log(str.charAt(1)); // method
// console.log(str.charAt(2)); // method
// console.log(str.charAt(3)); // method
// console.log(str.charAt(4)); // method    
// console.log(str.indexOf("K")); // method
// console.log(str.indexOf("u")); // method
// console.log(str.indexOf("n")); // method
// console.log(str.indexOf("j")); // method
// console.log(str.indexOf("a")); // method
// console.log(str.trim()); // method, remove leading and trailing whitespace from a string
// str.slice(start, end) -> method, returns a portion of a string based on the specified start and end indices. The start index is inclusive, while the end index is exclusive. If the end index is not provided, it will slice until the end of the string.
// str1.concat(str2) -> method, concatenates two or more strings and returns a new string. It does not modify the original strings.
// str.replace(searchValue, newValue) -> method, returns a new string with the first occurrence of the specified search value replaced by the new value. It does not modify the original string. If you want to replace all occurrences, you can use a regular expression with the global flag (g).
// str.charAt(index) -> method, returns the character at the specified index in a string. The index is zero-based, meaning that the first character is at index 0, the second character is at index 1, and so on. If the index is out of range, it returns an empty string.



//  template literals -> special type of string which allows us to embed expressions inside it. It is denoted by backticks (`) instead of single or double quotes.
// Way to embed expressions inside template literals is by using ${expression} syntax. The expression can be any valid JavaScript expression, including variables, function calls, and even other template literals.
// let specialString= `This is a template literal. The value of str is: ${str} and the value of str2 is: ${str2}`;

// console.log(specialString); 


let obj={
    item: "Laptop",
    price: 50000,
    brand: "Dell"
}

console.log(`The cost of ${obj.item} is ${obj.price}`);
console.log(`The brand of ${obj.item} is ${obj.brand}`);


