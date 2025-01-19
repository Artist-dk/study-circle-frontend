const db = require('../config/dbConfig');

class Book {
    constructor(title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, file_url) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.language = language;
        this.book_type = book_type;
        this.publication_date = publication_date;
        this.publisher = publisher;
        this.genre = genre;
        this.edition = edition;
        this.price = price;
        this.description = description;
        this.cover_image_url = cover_image_url;
        this.file_url = file_url;
    }

    // Static method to save a new book to the database
    static create(bookData, callback) {
        const sql = `INSERT INTO Books (title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileURL) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        const values = [
            bookData.title,
            bookData.author,
            bookData.pages,
            bookData.language,
            bookData.book_type,
            bookData.publication_date,
            bookData.publisher,
            bookData.genre,
            bookData.edition,
            bookData.price,
            bookData.description,
            bookData.cover_image_url,
            bookData.file_url
        ];

        db.query(sql, values, (error, result) => {
            if (error) {
                console.error('Error saving book:', error);
                return callback(error, null);
            } else {
                console.log('Book saved successfully');
                return callback(null, result);
            }
        });
    }
}

module.exports = Book;