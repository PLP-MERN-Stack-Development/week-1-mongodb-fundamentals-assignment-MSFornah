// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("plp_bookstore");

// inserting books in the collection

db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 35.99,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 29.99,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Programming",
    published_year: 2008,
    price: 19.99,
    in_stock: false,
    pages: 176,
    publisher: "O'Reilly Media"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 24.99,
    in_stock: true,
    pages: 309,
    publisher: "Scholastic"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 15.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 21.00,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-help",
    published_year: 2016,
    price: 17.99,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    published_year: 2011,
    price: 25.99,
    in_stock: false,
    pages: 336,
    publisher: "Crown Business"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 13.45,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 14.99,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  }
]);



// Find a document in a collection.
/*db.getCollection("books").findOne({

});*/
