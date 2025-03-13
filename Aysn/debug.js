function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: () => {
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
  createBook("song of ice and fire","George RR martin");