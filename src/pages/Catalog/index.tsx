import axios from 'axios';
import ProductCard from 'components/ProductCard';
import { ProductListContext } from 'context/ProductListContext';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductFromAPI } from 'types/productFromAPI';
import CardLoader from './CardLoader';
import './styles.css';

type UrlParams = {
  cep: string;
};

const Catalog = () => {
  const { cep } = useParams<UrlParams>();
  const [sellerName, setSellerName] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { productList, setProductList }: any = useContext(ProductListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/checkout/pub/regions?country=BRA&postalCode=${cep}`)
      .then((response) => {
        setSellerName(response.data.sellers[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cep]);

  useEffect(() => {
    axios
      .get(`/api/catalog_system/pub/products/search?fq=${sellerName}`)
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sellerName, setProductList]);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Veja os produtos que encontramos pertinho de você.</h1>
      <div className="catalog-cards row">
        {isLoading ? (
          <CardLoader />
        ) : (
          productList.map((product: ProductFromAPI) => (
            <div className="col-6 col-sm-4 col-lg-3" key={product.productId}>
              <Link to={`/${cep}/products/${product.productId}`} className="link-details">
                <ProductCard
                  imageText={product.items[0].images[0].imageText}
                  imageUrl={product.items[0].images[0].imageUrl}
                  price={product.items[0].sellers[0].commertialOffer.Price}
                  productName={product.productName}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;
