import React from "react";

export default function NumResults() {
  return (
    <>
      <input type="text" placeholder="Search movies..." className="search" />
      <p className="num-results">
        Found <strong>3</strong> results
      </p>
    </>
  );
}
