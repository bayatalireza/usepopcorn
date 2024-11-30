import React from "react";
import Search from "./search/Search"; // Assuming Search component is defined in a separate file
import Logo from "./logo/Logo"; // Assuming Logo component is defined in a separate file
import NumResults from "./numResult/NumResults";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults />
      </nav>
    </>
  );
}
