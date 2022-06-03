import BaseButton from 'components/BaseButton';
import React from 'react';

import './styles.css';

const Home = () => {
  return (
    <div className="home-content">
      <h1 className="home-title">Compra Fácil Carrefour</h1>
      <h2 className="home-subtitle">
        Com o Compra Fácil Carrefour ficou mais fácil encontrar os produtos mais próximos de você,
        basta digitar seu CEP que iremos te ajudar:
      </h2>
      <form action="#" className="home-card-content base-card">
        <input type="text" className="form-control base-input" placeholder="Digite seu CEP" />
        <BaseButton text="Buscar" />
      </form>
    </div>
  );
};

export default Home;
