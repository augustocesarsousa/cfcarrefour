import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    axios
      .get('/api/checkout/pub/regions?country=BRA&postalCode=05205190')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Compra Fácil Carrefour</h1>
    </div>
  );
}

export default App;
