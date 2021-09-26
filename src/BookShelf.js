import React from "react";
import Book from "./Book";

function BookShelf(props) {
  const { shelf, books, onMove } = props;
  const booksOfThisShelf = books.filter((book) => book.shelf === shelf.id);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOfThisShelf.map((book) => (
            <Book key={book.id} book={book} shelf={shelf.id} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
