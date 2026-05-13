// Task 5: API Call and Data Processing
// API Endpoint
// https://jsonplaceholder.typicode.com/users
// Requirements
// 1. Fetch data from the API
// 2. Filter users whose email contains “
// .biz”
// 3. Extract:
// ○
// ○
// name
// email
// 4. Count number of users per city
// Output
// ●
// ●
// Filtered users list
// Count of users grouped by city

// Example: Getting a random user's data

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
           console.log("Response status:", response.status); // Logs the http codes
      throw new Error('Network issue!'); // Checks if the response is succesful or not
    }
    return response.json(); // converts raw data into json format
  })
  .then(data => {
    console.log(data.name); // Success! 
  })
  .catch(error => {
    console.error('There was a problem:', error); // for handling error
  });

const filteredUsers = data.filter(user => user.email.includes('.biz')).map(user => ({
  name: user.name,
  email: user.email
}));

console.log("Filtered users:", filteredUsers);

