// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Aluraflix</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/nuevo-video">Nuevo Video</Link>
      </nav>
    </header>
  );
}

export default Header;
