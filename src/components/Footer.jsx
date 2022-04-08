import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Anna Ivashkina ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
