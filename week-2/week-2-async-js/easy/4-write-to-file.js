// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const profession = "I am a software developer by profession";

fs.writeFile('C:/Users/prayu/Desktop/Programming/100xDevsAssignmnets/assignments/assignments/week-2/week-2-async-js/easy/example2.txt', profession, 'utf-8', (err) => {
    if(err){
        console.error("Error writing the file:",err);
        return;
    }
    console.log("File Written Successfully!");
});

