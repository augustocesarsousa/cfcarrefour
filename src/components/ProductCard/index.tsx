import React from 'react';
import './styles.css';

const ProductCard = () => {
  return (
    <div className="base-card product-card-container">
      <div className="product-card-top-container">
        <img
          className="product-img"
          src="https://carrefourbr.vteximg.com.br/arquivos/ids/15813910/197564_1.jpg?v=637540293323270000"
          alt="Açúcar Refinado União 1Kg"
        />
      </div>
      <div className="product-card-bottom-container">
        <h6 className="product-title">Açúcar Refinado União 1Kg</h6>
        <p className="product-price">R$ 3,99</p>
      </div>
    </div>
  );
};

export default ProductCard;
