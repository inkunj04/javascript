const gfg={
    subject:"programming",
    language: "JavaScript",
}

function Person(name, age){
    this.name=name;
    this.age=age;   
    this.sayHello=function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);      
    };
}