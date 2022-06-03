import React from 'react';
import './styles.css';
import Logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <header className="header-content">
      <img src={Logo} alt="Carrefour logo" className="header-logo" />
      <h2 className="header-title">CF Carrefour</h2>
    </header>
  );
};

export default Header;
