function fetchURL(url){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(url){
                    resolve(`Data from ${url}`);
                }else{
                    reject("Url could not be fetched.")
                }
            }, 1000);
        });
}

const fs = require("fs");

function readFilePromise(path, encoding){
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

// fetchURL("https://leetcode.com/data").
// then(
//     data => {
//     console.log(data);
// })
// .catch(
//     error => {
//     console.log(error)
// });

readFilePromise("./Week-2/a.txt", "UTF-8")
.then(data => {
    console.log(data);
}).catch(err => {
    console.error('Error', err);
});

function readFileSec(path, encoding){
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

readFileSec("./Week-2/b.txt", "UTF-8").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Done!");
})