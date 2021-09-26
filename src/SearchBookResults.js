import React from "react";
import Book from "./Book";

function SearchBookResults(props) {
  const { searchedBooks, onMove } = props;
  if (searchedBooks.length === 0) {
    return (
      <div className="search-books-results">
        <h3>Note: </h3>
        The backend API uses a fixed set of cached search results and is limited
        to a particular set of search terms, which can be found below. That list
        of terms are the _only_ terms that will work with the backend, so don't
        be surprised if your searches for Basket Weaving or Bubble Wrap don't
        come back with any results. <br /> <br /> <strong>
          SEARCH_TERMS:
        </strong>{" "}
        'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
        'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
        'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
        'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital
        Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything',
        'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
        'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey',
        'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction',
        'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate',
        'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production',
        'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
        'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale',
        'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality',
        'Web Development', 'iOS'
      </div>
    );
  }
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchedBooks.map((book) => (
          <Book
            shelf={book.shelf ? book.shelf : "none"}
            key={book.id}
            book={book}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
}

export default SearchBookResults;
