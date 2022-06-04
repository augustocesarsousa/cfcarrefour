import Store from 'assets/images/store.png';
import BaseButton from 'components/BaseButton';
import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div className="home-content">
      <h1 className="home-title">Compra Fácil Carrefour</h1>
      <div className="home-subtitle-content">
        <p className="home-subtitle">
          Com o Compra Fácil Carrefour ficou mais fácil encontrar os produtos mais próximos de você,
          basta digitar seu CEP que iremos te ajudar:
        </p>
        <img src={Store} />
      </div>
      <form action="#" className="home-card-content base-card">
        <input type="text" className="form-control base-input" placeholder="Digite seu CEP" />
        <BaseButton text="Buscar" />
      </form>
    </div>
  );
};

export default Home;
