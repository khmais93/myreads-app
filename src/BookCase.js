import React from "react";
import BookShelf from "./BookShelf";

function BookCase(props) {
  const { shelves, books, onMove } = props;
  return (
    <div className="list-books-content">
      <div>
        {shelves.map((shelf) => (
          <BookShelf
            key={shelf.id}
            shelf={shelf}
            books={books}
            onMove={onMove}
          />
        ))}
      </div>
    </div>
  );
}

export default BookCase;
