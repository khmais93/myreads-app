import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ListBookPage from "./ListBookPage";
import SearchBookPage from "./SearchBookPage";
import { getAll, update } from "./BooksAPI";

const bookshelves = [
  { id: "currentlyReading", name: "Currently Reading" },
  { id: "wantToRead", name: "Want to Read" },
  { id: "read", name: "Have Read" },
];

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [error, setError] = useState(false);

  const resetSearch = () => {
    setSearchedBooks([]);
  };
  const onSearch = (books) => {
    setSearchedBooks(books);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAll();
        setBooks(response);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    }
    fetchData();
  }, []);

  const moveBook = (book, newShelf) => {
    const addedBook = books.find((b) => b.id === book.id);
    if (!addedBook) {
      setBooks([...books, { ...book, shelf: newShelf }]);
    } else {
      setBooks(
        books.map((b) => (b.id === book.id ? { ...b, shelf: newShelf } : b))
      );
    }
    async function updateData() {
      try {
        await update(book, newShelf);
      } catch (e) {
        console.error(e);
      }
    }
    updateData();
  };

  if (error) {
    return <div>Network error. Please try again later.</div>;
  }

  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <ListBookPage
                books={books}
                shelves={bookshelves}
                onMove={moveBook}
              />
            );
          }}
        />
        <Route
          path="/search"
          render={() => {
            return (
              <SearchBookPage
                onSearch={onSearch}
                searchedBooks={searchedBooks}
                onMove={moveBook}
                resetSearch={resetSearch}
                myBooks={books}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
