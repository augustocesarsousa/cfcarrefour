import Footer from 'components/Footer';
import Header from 'components/Header';
import { ProductListContext } from 'context/ProductListContext';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetails';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductFromAPI } from 'types/productFromAPI';
import './App.css';
import './assets/styles/custom.scss';

function App() {
  const [productList, setProductList] = useState<ProductFromAPI[]>([]);

  return (
    <ProductListContext.Provider value={{ productList, setProductList }}>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":cep/products/" element={<Catalog />} />
              <Route path=":cep/products/:productId" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ProductListContext.Provider>
  );
}

export default App;
