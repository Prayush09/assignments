
// /*
//     readFile(a.txt) --> a.txt {"hi there"} => I/O heavy operation. This may take more time which depends on the file. 
//     var a = "hi there" => Simple operation which stores a var in memory

//     Examples of I/O Heavy Ops: HTTP Requests, reading a file, starting a clock

//     * To use readFile, we need a statement called require -> it's used to require.
// */
// //use the fs library, we use this statement to import "fs" library.
// // file system module in node.js
// let fs = require("fs");

// let contents = fs.readFileSync("a.txt"); //simple english file encoding, 
// console.log(contents);
// //we require the encoding which is encoded unicode/ascii,(feel free to find out)
// //to convert into english format, we use decoding format which is UTF-8 -> most human readable format.
// contents = fs.readFileSync("b.txt");
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

// //async input
// fs.readFile("", "utf-8", function(err, contents){
//     console.log(contents);
// });

// fs.readFile("./b.txt", "utf-8", function(err, contents){
//     console.log(contents);
// });

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