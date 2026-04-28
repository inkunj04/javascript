// that stores data as key-value pairs, where the keys are strings and the values can be of any type. Objects are used to represent real-world entities and their properties.

// Objects can be created using object literals, constructor functions, or the Object.create() method. The most common way to create an object is by using object literals, which are defined using curly braces {} and contain key-value pairs separated by commas.        

let obj={
    name: "Alice",
    age: 30,
    city: "New York"    
};

console.log(obj);

// creation using new object() constructor

let ob=new object();
ob.name="Alice";
ob.age=30;
ob.city="New York";

console.log(ob);

// creation using Object.create() method

let obje=Object.create(null);
obje.name="Alice";
obje.age=30;
obje.city="New York";

console.log(obje);

console.log(obj.name); // Alice
console.log(obj.age); // 30
console.log(obj.city); // New York

// you can also access object properties using bracket notation, which allows you to use variables or expressions as keys.

let key="name";
console.log(obj[key]); // Alice

// you can also add new properties to an existing object by simply assigning a value to a new key.

obj.country="USA";
console.log(obj.country); // USA     

// modify existing properties
obj.age=31;
console.log(obj.age); // 31

// delete properties from an object using the delete operator.

delete obj.city;
console.log(obj.city); // undefined 

// adding property to an object 

let object1={
    name: "Alice",
    age: 30
};

object1.city="New York";
console.log(object1); // { name: 'Alice', age: 30, city: 'New York' }

object1.age=31;
console.log(object1); // { name: 'Alice', age: 31, city: 'New York' }

// merging two objects using Object.assign() method

let obj1={
    name: "Alice",
    age: 30
};

let obj2={
    city: "New York",
    country: "USA"
};

let mergedObj=Object.assign({}, obj1, obj2);
console.log(mergedObj); // { name: 'Alice', age: 30, city: 'New York', country: 'USA' }

// you can also use the spread operator (...) to merge objects.

let mergedObj2={...obj1, ...obj2};
console.log(mergedObj2); // { name: 'Alice', age: 30, city: 'New York', country: 'USA' }

// object length -> Object.keys(obj).length -> method, returns the number of enumerable properties in an object. It does this by first getting an array of the object's keys using Object.keys() and then returning the length of that array.       
console.log(Object.keys(obj).length); // 3




