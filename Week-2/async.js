const fs = require("fs");

function print(err, contents){
    if(err){
        console.log("File not Found!");
    }else{
        console.log(contents);
    }
}
//async input
//whichever tasks completes first will be logged first.
fs.readFile("./Week-2/a.txt", "utf-8", print); //async

fs.readFile("./Week-2/b.txt", "utf-8", print); //async


console.log("Done!")

//notice how "Done!" is printed first, this is how async works. both are done at the same time
//while that is happening, the other things are done below it, and when it completes, generates output.

function timeout(){
    console.log("Click the button!");
}

console.log("H1!");

setTimeout(timeout, 1000);//webapis, async function

console.log("Welcome to loupe");

let c = 0;
//3-4 sec
for(let i = 0 ;i < 10000000000 ; i++){
    c = c + 1;
}

console.log("Expensive operation done");
//which one will be logged first?
//The expensive operation is done first, so the CPU intesive operation is done first, 
//This happened because the thread was not free, it was busy executing the for-loop, and 
//the async function will only get completed once the thread BECOMES FREE!

// You running on treadmill and then after you're done is when you take the clothes out of washing machine
// even though washing machine was done after 10 mins, and you had to keep running until 30 mins.

// we have call stack, Web Apis, Callback Queue. 
// for all sync things, everything is done using call stack.