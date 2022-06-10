import React from 'react';
import './styles.css';

type Props = {
  imageUrl: string;
  imageText: string;
  productName: string;
  price: number;
};

const ProductCard = ({ imageUrl, imageText, productName, price }: Props) => {
  return (
    <div className="product-card-container base-card">
      <div className="product-card-top-container">
        <img className="product-img" src={imageUrl} alt={imageText} />
      </div>
      <div className="product-card-bottom-container">
        <h6 className="product-title">{productName}</h6>
        <p className="product-price">R$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
