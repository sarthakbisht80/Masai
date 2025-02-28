console.log("Starting...");

// Initialize a counter to track elapsed time
let counter = 0;

// Start setInterval to log "Loading..." every 1 second
const loadingInterval = setInterval(() => {
    console.log("Loading...");
    counter++;
    
    // Stop after 5 seconds
    if (counter === 5) {
        clearInterval(loadingInterval);
        console.log("Loaded successfully!");
    }
},5000);