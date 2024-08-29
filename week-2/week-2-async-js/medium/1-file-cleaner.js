const fs = require('fs');

fs.readFile('C:/Users/prayu/Desktop/Programming/100xDevsAssignmnets/assignments/assignments/week-2/week-2-async-js/medium/example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("File corrupt", err);
        return;
    }
    console.log("File read successfully!");

    const newString = data.replace(/\s+/g, ' ').trim();

    console.log("File contents : ",newString);
    
    fs.writeFile('C:/Users/prayu/Desktop/Programming/100xDevsAssignmnets/assignments/assignments/week-2/week-2-async-js/medium/result.txt', newString, (err) => {
        if (err) {
            console.error("Error writing to file", err);
            return;
        }
        console.log("File has been cleaned and saved successfully!");
    });
});
