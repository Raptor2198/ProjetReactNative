import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const toggleReadStatus = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const toggleFavoriteStatus = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
  };

  const filterBooks = (category) => {
    if (category === 'À lire') {
      return books.filter((book) => !book.isRead);
    }
    if (category === 'Lus') {
      return books.filter((book) => book.isRead);
    }
    if (category === 'Favoris') {
      return books.filter((book) => book.isFavorite);
    }
    return books;
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, toggleReadStatus, toggleFavoriteStatus, filterBooks }}
    >
      {children}
    </BookContext.Provider>
  );
}
