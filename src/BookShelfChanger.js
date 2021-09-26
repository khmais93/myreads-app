import React, { useState } from "react";

function BookShelfChanger(props) {
  const { book, shelf, onMove } = props;
  const [shelfValue, setShelfValue] = useState(shelf);
  const changeHandler = (e) => {
    e.preventDefault();
    setShelfValue(e.target.value);
    onMove(book, e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={changeHandler} value={shelfValue}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
