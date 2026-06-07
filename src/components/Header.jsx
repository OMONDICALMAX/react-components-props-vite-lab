import React from "react";

function Header({ name, blog }) {
  return (
    <header>
      <h1>{name || blog?.name}</h1>
    </header>
  );
}

export default Header;