/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) =>{
        setTimeout(resolve, t);
    });
}

function wait2(t) {
    return new Promise((resolve) =>{
        setTimeout(resolve, t);
    });
}

function wait3(t) {
    return new Promise((resolve) =>{
        setTimeout(resolve, t);
    });
}

function logTime(resolve, label){
    const startTime = Date.now();
    return resolve.then(() =>{
        const endTime = Date.now();
        console.log(`${label} resolved in ${endTime - startTime} ms`);
    });
}

function calculateTime(t1, t2, t3) {
    const totalTime = Date.now();
    Promise.all([
        logTime(wait1(t1), `Promise 1`),
        logTime(wait2(t2), `Promise 2`),
        logTime(wait3(t3), `Promise 3`)
    ]).then(() => {
        const endTime = Date.now();
        console.log(`All Promise resolved`)
        console.log(`${endTime-totalTime} ms taken`)
    });
}

calculateTime(1000,2000,3000);

module.exports = calculateTime;