import Logo from 'assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className="header-content">
      <Link to="/" className="header-link">
        <img src={Logo} alt="Carrefour logo" className="header-logo" />
        <h2 className="header-title">CF Carrefour</h2>
      </Link>
    </header>
  );
};

export default Header;
