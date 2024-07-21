// Architecture of Node.js
// Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js

//Example:
console.log("Starting up Node.js"); // This will go to the call stack

setTimeout(() => {   // This is a function which is integrated from the C++ library
  // This will go to the Node API and then to the callback queue then will enter the call stack
  console.log("2 seconds timer");
}, 2000);

setTimeout(() => {   // This is a function which is integrated from the C++ library
  // This will go to the Node API and then to the callback queue then will enter the call stack
  console.log("0 second timer");
}, 0);

console.log("Stopping up Node.js"); // This will go to the call stack
