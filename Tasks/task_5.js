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
           console.log("Response status:", response.status); // Logs the HTTP status code
      throw new Error('Network issue!'); // Checks if the link actually worked
    }
    return response.json(); // Converts raw data to a JavaScript object
  })
  .then(data => {
    console.log(data.name); // Success! You can now use the data
  })
  .catch(error => {
    console.error('There was a problem:', error); // Handles errors like a dead link
  });

console.log(data)
