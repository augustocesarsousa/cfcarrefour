import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Sellers } from './types/seller';

function App() {
  const [sellers, setSellers] = useState<Sellers[]>();

  useEffect(() => {
    axios
      .get('/api/checkout/pub/regions?country=BRA&postalCode=07914010')
      .then((response) => {
        setSellers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Compra Fácil Carrefour</h1>
      {sellers?.map((obj) => obj.sellers.map((seller) => <p key={seller.id}>{seller.name}</p>))}
    </div>
  );
}

export default App;
