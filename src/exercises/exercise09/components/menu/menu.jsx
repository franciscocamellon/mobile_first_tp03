import React, { useState } from "react";
import "./menu.css";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <img
            id="logo"
            src="https://via.placeholder.com/100x50?text=Logo"
            className="logo"
          />
          <button
            className="menu-toggle"
            id="menuToggle"
            onClick={handleToggleMenu}
          >
            ☰
          </button>
          <ul
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
            id="navLinks"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Contatos </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Menu;
