import React from "react";
import Search from "./Search";

function Header({ setSubmittedSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSubmittedSearch={setSubmittedSearch} />
    </header>
  );
}

export default Header;
