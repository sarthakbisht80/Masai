function factorial(n) {
    // Check for non-numeric input
    if (typeof n !== "number" || !Number.isInteger(n)) {
        console.log("Invalid input");
        return null;
    }

    // Check for negative numbers
    if (n < 0) {
        console.log("Invalid input");
        return null;
    }

    // Base case: factorial(0) = 1
    if (n === 0) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}

