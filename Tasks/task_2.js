// Validate user registration data.
// Dataset
// const users = [
// { username: “jay123”, password: “123456”, age: 25 },
// { username: “”, password: “pass123”, age: 22 },
// { username: “rohit”, password: “123”, age: 17 },
// { username: “neha”, password: “securePass”, age: 30 },
// { username: “amit”, password: “mypassword”, age: 16 },
// { username: “priya”, password: “abc123”, age: 19 },
// { username: “”, password: “secure123”, age: 28 },
// { username: “karan”, password: “pass”, age: 35 },
// { username: “sneha”, password: “validPass1”, age: 21 },
// { username: “raj”, password: “12345678”, age: 18 }
// ];
// Rules
// ● Username should not be empty
// ● Password must be at least 6 characters
// ● Age must be 18 or above
// Output
// ● Valid users
// ● Invalid users with reason

const users = [
  { username: "jay123", password: "123456", age: 25 },
  { username: "", password: "pass123", age: 22 },
  { username: "rohit", password: "123", age: 17 },
  { username: "neha", password: "securePass", age: 30 },
  { username: "amit", password: "mypassword", age: 16 },
  { username: "priya", password: "abc123", age: 19 },
  { username: "", password: "secure123", age: 28 },
  { username: "karan", password: "pass", age: 35 },
  { username: "sneha", password: "validPass1", age: 21 },
  { username: "raj", password: "12345678", age: 18 },
];

let validUsers = [];
let invalidUsers = [];

users.forEach((user) => {
  let reasons = [];

  if (user.username == "") {
    reasons.push("Username should not be empty");
  }

  if (user.password.length < 6) {
    reasons.push("Password must be at least 6 characters");
  }

  if (user.age < 18) {
    reasons.push("Age must be 18 or above");
  }

  if (reasons.length == 0) {
    validUsers.push(user);
  } else {
    invalidUsers.push({ user, reasons });
  }
});

console.log("Valid users:", validUsers);
console.log("Invalid users with reasons:");
invalidUsers.forEach((invalid) => {
  console.log("User:", invalid.user);
  console.log("Reasons:", invalid.reasons.join(", "));
});

