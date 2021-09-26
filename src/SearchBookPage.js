import React from "react";
import SearchBookBar from "./SearchBookBar";
import SearchBookResults from "./SearchBookResults";

function SearchBookPage(props) {
  const { onMove, myBooks, resetSearch, searchedBooks, onSearch } = props;

  return (
    <div className="search-books">
      <SearchBookBar resetSearch={resetSearch} onSearch={onSearch} />
      <SearchBookResults
        myBooks={myBooks}
        onMove={onMove}
        searchedBooks={searchedBooks}
      />
    </div>
  );
}

export default SearchBookPage;
