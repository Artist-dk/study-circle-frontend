import React, { useEffect, useState } from "react";
import "./favouriteBooks.css";

const FavouriteBooks = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favourite_books")) || [];
    setBooks(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("favourite_books", JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (!title.trim() || !author.trim()) return;

    setBooks([
      ...books,
      {
        id: Date.now(),
        title,
        author,
      },
    ]);

    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="books-section">
      <h2>📚 Favourite Books</h2>

      <div className="books-input">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add</button>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-icon">📖</div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteBooks;
