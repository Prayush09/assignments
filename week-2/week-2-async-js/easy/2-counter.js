function counter(){
    let count = 0;
    function incrementcounter(){
            count++;
            console.log(count);
            setTimeout(incrementcounter, 1000);
    }
   
    incrementcounter();
}

counter();