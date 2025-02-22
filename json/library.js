let books = [];


function addBook(book) {
    books.push(book);
    displayBooks();
}

// Remove a book by name
function removeBook(book) {
    const index = books.indexOf(book);
    if (index !== -1) {
        books.splice(index, 1);
        console.log(`Removed: ${book}`);
    } else {
        console.log(`Book not found: ${book}`);
    }
    displayBooks();
}

// Search for a book
function searchBook(book) {
    console.log(books.includes(book) ? `Book found: ${book}` : `Book not found: ${book}`);
}

// Find first and last occurrence of a book
function findOccurrences(book) {
    console.log(`First occurrence: ${books.indexOf(book)}`);
    console.log(`Last occurrence: ${books.lastIndexOf(book)}`);
}

// Extract a sublist of books
function extractBooks(start, end) {
    console.log("Extracted books:", books.slice(start, end));
}

// Sort books alphabetically
function sortBooks() {
    books.sort((a, b) => a.localeCompare(b));
    console.log("Sorted books:", books);
}

// Replace a book at a given index
function replaceBook(index, newBook) {
    if (index >= 0 && index < books.length) {
        books.splice(index, 1, newBook);
        console.log(`Replaced book at index ${index} with ${newBook}`);
    } else {
        console.log("Invalid index");
    }
    displayBooks();
}

// Join books into a single string
function joinBooks() {
    console.log("Book List:", books.join(", "));
}

// Display the current list of books
function displayBooks() {
    console.log("Current Books:", books);
}

// Example usage
addBook("The Great Gatsby");
addBook("1984");
addBook("To Kill a Mockingbird");
addBook("1984");
removeBook("1984");
searchBook("The Great Gatsby");
findOccurrences("1984");
extractBooks(0, 2);
sortBooks();
replaceBook(1, "Moby Dick");
joinBooks();
