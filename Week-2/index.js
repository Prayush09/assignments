// function sum(n){
//     return n*(n+1)/2;
// }
// //sync code: The code is always executing one line at a time, in the order it's written. 
// //           Each operation waits for the previous one to complete before moving on to the next one.
// let c = 5;
// console.log(sum(c));
// console.log("Current working directory:", process.cwd());

// /*
//     readFile(a.txt) --> a.txt {"hi there"} => I/O heavy operation. This may take more time which depends on the file. 
//     var a = "hi there" => Simple operation which stores a var in memory

//     Examples of I/O Heavy Ops: HTTP Requests, reading a file, starting a clock

//     * To use readFile, we need a statement called require -> it's used to require.
// */
// //use the fs library, we use this statement to import "fs" library.
// // file system module in node.js
// let fs = require("fs");

// let contents = fs.readFileSync("./Week-2/a.txt","utf-8"); //simple english file encoding, 
// console.log(contents);
// //we require the encoding which is encoded unicode/ascii,(feel free to find out)
// //to convert into english format, we use decoding format which is UTF-8 -> most human readable format.
// contents = fs.readFileSync("./Week-2/b.txt","utf-8");
// console.log(contents);
// /*
//     In objects we can have functions as attributes. 
//     var user = {
//         age = 21;
//         name = p;
//         caclAge: function(){
//             return age;
//         }
//     }
// */

// //Two types: readFile function and readFileSync function.
// // readFile is async. 
// /*
//     CPU Bound tasks: Tasks dependents on the cpu.
//     I/O Bound tasks: tasks dependents on the input and output tasks
//         examples: Boils some water, do some laundary, send package via physical mail.
//                 -> will you do them one by one (sync) or context switch between them (async)
//             start all 3 tasks together, and wait for them to finish. the first one that finishes gets catered to first.
    
// */
// function print(err, contents){
//     console.log(contents);
// }
// //async input
// //whichever tasks completes first will be logged first.
// fs.readFile("./Week-2/a.txt", "utf-8", print); //async

// fs.readFile("./Week-2/b.txt", "utf-8", print); //async


// console.log("Done!")
// //Functional Arguments
// //=> Passing a function as another function's arugment.\
// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     return op(a, b)
//   }
  
//   console.log(doOperation(1, 2, sum))



  function random(){

  }


  let p = new Promise(random); //supposed to return u something eventually.
  console.log(p);