const db = require('../config/dbConfig');


exports.addNewBook = (req, res) => {
    console.log("adding new book in database")
    const { title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL } = req.body;

    console.log(req.body);
    
    const filename = req.file.originalname;
    const fileUrl = req.file.path; 

    const sql = `INSERT INTO books (title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileURL) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const values = [title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileUrl];

    if(!title) return res.send("Title is required")
    if(!author) return res.send("author is required")
    if(!pages) return res.send("pages is required")
    if(!language) return res.send("language is required")
        
    db.query(sql, values, (error, result) => {
        if (error) {
            console.error('Error adding book to the library:', error);
            res.status(500).json({ error: 'Error adding book to the library' });
        } else {
            console.log('Book added to the library successfully');
            res.status(200).json({ message: 'Book added to the library successfully' });
        }
    });
};
exports.fetchAllBooks = (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*")
    // res.header("Access-Control-Allow-Methods", "POST, GET")
    // res.header("Access-Control-Allow-Headers", "Content-Type, X-Auth-Token, Origin, Authorization")
    const sql = `SELECT * FROM books`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error('Error fetching books from the library:', error);
            res.status(500).json({ error: 'Error fetching books from the library' });
        }
        if (result.length > 0) {
            console.log('Books fetched from the library successfully');
            res.status(200).json({result});
        } else {
            console.log('Book not found');
            res.status(404).json({ error: 'Book not found' });
        }
    });
};


exports.fetchNewBook = (req, res) => {
    const bookId = req.params.bookId; // Assuming bookId is passed as a parameter

    const sql = `SELECT * FROM books WHERE id = ?`;

    db.query(sql, [bookId], (error, result) => {
        if (error) {
            console.error('Error fetching book from the library:', error);
            res.status(500).json({ error: 'Error fetching book from the library' });
        } else {
            if (result.length > 0) {
                console.log('Book fetched from the library successfully');
                res.status(200).json({ book: result[0] });
            } else {
                console.log('Book not found');
                res.status(404).json({ error: 'Book not found' });
            }
        }
    });
};
// Update Book Details
// Remove a Book
// Search for Books
// Check Out Books
// Return Books
// Renew Books
// Reserve Books
// Manage Patron Accounts
// Generate Reports
// Fine Management
// Cataloging
// Interlibrary Loan
// Library Events Management
// Digital Library Management