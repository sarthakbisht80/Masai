function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");

    // Check if "Eve" is in the list
    console.log("Checking if 'Eve' exists:", students.includes("Eve")); // Expected: false

    // Convert the array to a string with names separated by commas
    console.log("Student list:", students.join(",")); // Expected: "Alice,David,Bob,Charlie"

    return students;
}

// Test cases
function testManageStudents() {
    let students = manageStudents();
    
    console.assert(students.includes("David"), "Test failed: 'David' should be in the array.");
    console.assert(!students.includes("Eve"), "Test failed: 'Eve' should not be in the array.");
    console.assert(students.join(",") === "Alice,David,Bob,Charlie", "Test failed: Incorrect string output.");
    
    console.log("All tests passed!");
}

testManageStudents();
