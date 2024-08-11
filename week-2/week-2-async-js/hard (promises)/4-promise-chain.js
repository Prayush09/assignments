// Function that returns a promise resolving after t milliseconds
function wait1(t) {
    return new Promise((resolve) => {console.log("1st promise working..."); setTimeout(resolve, t)});
}

function wait2(t) {
    return new Promise((resolve) =>{console.log("2nd promise working..."); setTimeout(resolve, t)});
}

function wait3(t) {
    return new Promise((resolve) => {console.log("3rd promise working..."); setTimeout(resolve, t)});
}

// Function to calculate time taken for sequential and concurrent execution
function calculateTime(t1, t2, t3) {
    const startSequential = Date.now();

    // Execute promises sequentially
    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            const endSequential = Date.now();
            const sequentialTime = endSequential - startSequential;

            // Execute promises concurrently
            const startConcurrent = Date.now();

            return Promise.all([
                wait1(t1),
                wait2(t2),
                wait3(t3)
            ]).then(() => {
                const endConcurrent = Date.now();
                const concurrentTime = endConcurrent - startConcurrent;

                
                console.log(`Sequential Time Taken: ${sequentialTime} ms`);
                console.log(`Concurrent Time Taken: ${concurrentTime} ms`);
                console.log(`Time Difference: ${sequentialTime - concurrentTime} ms`);
                console.log('All Promises resolved');

                return {
                    sequentialTime,
                    concurrentTime,
                    difference: sequentialTime - concurrentTime
                };
            });
        });
}

calculateTime(1000,2000,3000)

module.exports = calculateTime;
