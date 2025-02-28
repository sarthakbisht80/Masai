function Book(title, author) {
    return {
        title,
        author,
        details() {
            console.log(`Title: ${this.title}, Author: ${this.author}`);
        }
    };
}

// Factory function to create a Library
function createLibrary() {
    const books = []; // Internal collection of books

    return {
        addBook(book) {
            books.push(book);
        },
        removeBook(title) {
            const index = books.findIndex(book => book.title === title);
            if (index !== -1) {
                books.splice(index, 1);
            } else {
                console.log(`Book with title "${title}" not found.`);
            }
        },
        listBooks() {
            if (books.length === 0) {
                console.log("No books available in the library.");
                return;
            }
            books.forEach(book => book.details());
        }
    };
}