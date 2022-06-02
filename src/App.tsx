import axios from 'axios';
import Header from 'components/header';
import { useEffect, useState } from 'react';
import './App.css';
import { Product } from './types/product';
import { Sellers } from './types/seller';

function App() {
  const [sellers, setSellers] = useState<Sellers[]>();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    axios
      .get('/api/checkout/pub/regions?country=BRA&postalCode=17560246')
      .then((response) => {
        setSellers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sellerId = sellers?.map((obj) => obj.sellers[2].id);

  useEffect(() => {
    axios
      .get('/api/catalog_system/pub/products/search?fq=' + sellerId)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {products?.map((product) => (
        <p key={product.productId}>
          {product.productId} - {product.productName}
        </p>
      ))}
    </div>
  );
}

export default App;
