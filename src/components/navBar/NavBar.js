import React from "react";
import Search from "./Search"; // Assuming Search component is defined in a separate file
import Logo from "./Logo"; // Assuming Logo component is defined in a separate file
import NumResults from "./NumResults";

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
