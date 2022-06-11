import React from 'react';
import { ReactComponent as GithubIcon } from 'assets/images/github.svg';
import './styles.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-text">
          <p>Desenvolvido por - </p>
          <a href="https://github.com/augustocesarsousa" target="_blank" rel="noreferrer">
            <div className="footer-contact-container">
              <GithubIcon />
              <p className="footer-contact-link">/augustocesarsousa</p>
            </div>
          </a>
        </div>
        <div className="footer-text">
          <p>
            Bootcamp Carrefour Web Developer da{' '}
            <a href="https://web.dio.me/home" target="_blank" rel="noreferrer">
              DIO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
