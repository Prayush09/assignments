// Function that returns a promise resolving after t milliseconds
function wait1(t) {
    return new Promise((resolve) => {setTimeout(resolve, t*1000)});
}

function wait2(t) {
    return new Promise((resolve) =>{setTimeout(resolve, t*1000)});
}

function wait3(t) {
    return new Promise((resolve) => {setTimeout(resolve, t*1000)});
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
            return sequentialTime;
        });
    }

module.exports = calculateTime;
