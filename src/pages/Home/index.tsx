import Store from 'assets/images/store.png';
import BaseButton from 'components/BaseButton';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const cep = 17560246;

  return (
    <div className="home-container">
      <h1 className="home-title">Compra Fácil Carrefour</h1>
      <div className="home-subtitle-content">
        <p className="home-subtitle">
          Com o Compra Fácil Carrefour ficou mais fácil encontrar os produtos mais próximos de você,
          basta digitar seu CEP que iremos te ajudar:
        </p>
        <img src={Store} />
      </div>
      <form action="#" className="home-card-content base-card">
        <input
          type="text"
          className="form-control base-input input-cep"
          placeholder="Digite seu CEP"
        />
        <Link to={`/${cep}/products`} className="link-cep">
          <BaseButton text="Buscar" />
        </Link>
      </form>
    </div>
  );
};

export default Home;
