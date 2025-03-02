function BookCollection(books=[]){
    this.books=books;
}
BookCollection.prototype.addBook=function(book){
    this.books.push(book);
    console.log("book added");
};
BookCollection.prototype.findBookByAuthor=function(author){
    const booksbyauthor=this.book.filter(book=>book.author===author);
    return booksbyauthor;
};
BookCollection.prototype.getStatistics=function(author){
   const totalbooks=this.books.length;
   let oldestbook=this.books[0];
   let newestbook=this.books[0];
   for(let i=1;i<this.books.length;i++){
    if(this.books[i].year<oldestbook.year){
        oldestbook=this.book[i];
    }
    if(this.books[i].year>newestbook.year){
        newestbook=this.books[i];
    }
   }
   return {
    totalbooks:totalbooks,
    oldestbook:oldestbook,
   newestbook:newestbook
   };
};
const classicBooks = new BookCollection();

classicBooks.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
  });
  
classicBooks.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
  });
  
  classicBooks.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  });


console.log(classicBooks);

const stats = classicBooks.getStatistics();
console.log(stats);
