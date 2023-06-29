import React from 'react';
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Početna</Link>
        </li>
        <li>
          <Link to="/kanban">Kanban Tabla</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
