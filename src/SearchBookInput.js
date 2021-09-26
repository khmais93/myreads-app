import React, { useState, useEffect } from "react";
import { search } from "./BooksAPI";

function SearchBookInput(props) {
  const { onSearch } = props;

  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(
    () => {
      async function searchData() {
        try {
          if (searchValue.length > 0) {
            {
              const response = await search(searchValue);
              if (response.error) {
                onSearch([]);
              } else {
                onSearch(response);
              }
            }
          } else {
            onSearch([]);
          }
        } catch (e) {
          console.error(e);
        }
      }
      const timeOutId = setTimeout(() => {
        searchData();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    },
    [searchValue]
  );

  return (
    <div className="search-books-input-wrapper">
      <input
        value={searchValue}
        type="text"
        placeholder="Search by title or author"
        onChange={changeHandler}
      />
    </div>
  );
}

export default SearchBookInput;
