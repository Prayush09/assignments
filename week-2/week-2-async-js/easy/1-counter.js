function count() {
    let counter = 0;
    setInterval(() => {
        counter++;
        console.log(counter);
         // Update the displayed counter value
    }, 1000); // 1000 milliseconds = 1 second
}

count(); 