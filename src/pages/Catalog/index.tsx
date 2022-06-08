import ProductCard from 'components/ProductCard';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Catalog = () => {
  const productId = 1;
  const cep = 17560246;

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Veja os produtos que encontramos pertinho de você.</h1>
      <div className="catalog-cards row">
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <Link to={`/${cep}/products/${productId}`} className="link-details">
            <ProductCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
