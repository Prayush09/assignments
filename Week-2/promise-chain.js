/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

function calculateTimeSequential(t1, t2, t3) {
    const totalTime = Date.now();
    return logTime(wait1(t1), `Promise 1`)
    .then(() => logTime(wait2(t2), `Promise 2`))
    .then(() => logTime(wait3(t3), `Promise 3`))
    .then(() => {
    const endTime = Date.now();
    console.log(`All Promise resolved`)
    return endTime-totalTime;
    });
}

function calculateTimeConcurrent(t1, t2, t3) {
    const totalTime = Date.now();
    return Promise.all([
        logTime(wait1(t1), `Promise 1`),
        logTime(wait2(t2), `Promise 2`),
        logTime(wait3(t3), `Promise 3`)
    ]).then((concurrentTime) => {
        const endTime = Date.now();
        result = endTime-totalTime;
        return result;
    });
}

const t1 = 1000;
const t2 = 2000;
const t3 = 3000;

calculateTimeSequential(t1,t2,t3).then((sequentialTime) =>{
    return calculateTimeConcurrent(t1,t2,t3).then((concurrentTime) =>{
        console.log(`Sequential Time Taken : ${sequentialTime} ms`);
        console.log(`Concurrent Time Taken : ${concurrentTime} ms`)
        console.log(`Time Difference : ${sequentialTime - concurrentTime} ms`)
        console.log(`All Promise resolved`)
    });
});

module.exports = { calculateTimeSequential, calculateTimeConcurrent };