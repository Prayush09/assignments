function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format hours, minutes, and seconds with leading zeros
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    
    // 24-hour format
    const time24 = `${hours}:${minutes}:${seconds}`;
    console.log(`24-hour format: ${time24}`);
    
    // 12-hour format with AM/PM
    let hours12 = now.getHours();
    let ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // Handle 0 as 12
    hours12 = (hours12 < 10 ? '0' : '') + hours12;
    
    const time12 = `${hours12}:${minutes}:${seconds} ${ampm}`;
    console.log(`12-hour format: ${time12}`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
