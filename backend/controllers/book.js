const model = require('../models/book');

exports.addNewBook = (req, res) => {
    const { title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, file_url } = req.body;

    console.log(req.body)

    const newBook = new Book(title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, file_url);

    // model.create(newBook, (error, result) => {
    //     if (error) {
    //         console.error('Error adding book to the library:', error);
    //         res.status(500).json({ error: 'Error adding book to the library' });
    //     } else {
    //         console.log('Book added to the library successfully');
    //         res.status(200).json({ message: 'Book added to the library successfully' });
    //     }
    // });
};
