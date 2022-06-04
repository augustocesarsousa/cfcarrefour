import ProductCard from 'components/ProductCard';
import React from 'react';
import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Veja os produtos que encontramos pertinho de você.</h1>
      <div className="catalog-cards row">
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
