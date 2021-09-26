import React from "react";
import { Link } from "react-router-dom";

function CloseSearchButton(props) {
  const { resetSearch } = props;

  return (
    <Link to="/">
      <button onClick={resetSearch} className="close-search">
        Close
      </button>
    </Link>
  );
}

export default CloseSearchButton;
