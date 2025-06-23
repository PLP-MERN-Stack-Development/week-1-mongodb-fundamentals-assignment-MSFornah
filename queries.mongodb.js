// // MongoDB Playground
// // Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// // The current database to use.
use("plp_bookstore");


// // 1. Find all books in a specific genre
// db.books.find({ genre: "Fantasy" });

// // 2. Find books published after a certain year
// db.books.find({ published_year: { $gt: 2000 } });

// // 3. Find books by a specific author
// db.books.find({ author: "Cal Newport" });

// // 4. Update the price of a specific book
// db.books.updateOne(
//   { title: "1984" },
//   { $set: { price: 15.99 } }
// );

// // 5. Delete a book by its title
// db.books.deleteOne({ title: "The Lean Startup" });



//TASK 3: ADVANCED QUERIES
// // 6. Find books that are both in stock and published after 2010
// db.books.find({
//   in_stock: true,
//   published_year: { $gt: 2010 }
// });

// // 7. Projection: return only title, author, and price
// db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// // 8. Sorting by price ascending
// db.books.find().sort({ price: 1 });

// // 9. Sorting by price descending
// db.books.find().sort({ price: -1 });

// // 10. Pagination: 5 books per page (page 1)
// db.books.find().skip(0).limit(5);

// // Pagination: page 2
// db.books.find().skip(5).limit(5);



//AGGREGATION PIPELINE
// 11. Average price of books by genre
// db.books.aggregate([
//   { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
// ]);

// // 12. Author with the most books
// db.books.aggregate([
//   { $group: { _id: "$author", total: { $sum: 1 } } },
//   { $sort: { total: -1 } },
//   { $limit: 1 }
// ]);

// // 13. Group books by publication decade
// db.books.aggregate([
//   {
//     $group: {
//       _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
//       count: { $sum: 1 }
//     }
//   },
//   { $sort: { _id: 1 } }
// ]);


//TASK 5: INDEXING
// 14. Create index on title
db.books.createIndex({ title: 1 });

// 15. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 16. Use explain() to see performance
db.books.find({ title: "Clean Code" }).explain("executionStats");

