function startCountdown() {
    let seconds = parseInt(prompt("Enter countdown time in seconds: "), 10);

    if (isNaN(seconds) || seconds <= 0) {
        console.log("Please enter a valid positive number.");
        return;
    }

    console.log(`Countdown starts from ${seconds} seconds.`);

 
    let timer = setInterval(() => {
        if (seconds > 0) {
            console.log(`Time left: ${seconds} seconds`);
            seconds--;
        } else {
            clearInterval(timer);
            console.log("Countdown Complete!");
        }
    }, 1000);

    setTimeout(() => {
        document.addEventListener("keydown", function stopCountdown(event) {
            if (event.key.toLowerCase() === "s") {
                clearInterval(timer);
                console.log("Countdown Stopped by User.");
                document.removeEventListener("keydown", stopCountdown); // Remove event listener
            }
        });
    }, 500); 
}

startCountdown();
