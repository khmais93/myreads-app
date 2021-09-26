import React from "react";
import BookCase from "./BookCase";
import NavBar from "./NavBar";
import OpenSearchButton from "./OpenSearchButton";

function ListBookPage(props) {
  const { shelves, books, onMove } = props;
  return (
    <div className="list-books">
      <NavBar />
      <BookCase books={books} shelves={shelves} onMove={onMove} />
      <OpenSearchButton />
    </div>
  );
}

export default ListBookPage;
