import React from "react";
import CloseSearchButton from "./CloseSearchButton";
import SearchBookInput from "./SearchBookInput";

function SearchBookBar(props) {
  const { onSearch, resetSearch } = props;

  return (
    <div className="search-books-bar">
      <CloseSearchButton resetSearch={resetSearch} />
      <SearchBookInput onSearch={onSearch} />
    </div>
  );
}

export default SearchBookBar;
