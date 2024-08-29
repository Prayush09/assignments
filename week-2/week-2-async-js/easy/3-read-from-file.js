// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');
// Read file asynchronously
console.log("File read operation initiated.")
fs.readFile('C:/Users/prayu/Desktop/Programming/100xDevsAssignmnets/assignments/assignments/week-2/week-2-async-js/easy/example2.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File contents:\n", data);
});

// Expensive operation: A large loop to simulate a CPU-heavy task
console.log("Starting expensive operation...");

let sum = 0;
//takes almost an eternity to complete
for (let i = 0; i < 1e9; i++) {
    sum += i;
}

console.log("Expensive operation finished. Sum:", sum);
