import axios from 'axios';
import ProductCard from 'components/ProductCard';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.css';

type UrlParams = {
  cep: string;
};

const Catalog = () => {
  const productId = 1;

  const { cep } = useParams<UrlParams>();

  useEffect(() => {
    axios
      .get(`/api/checkout/pub/regions?country=BRA&postalCode=${cep}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cep]);

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
