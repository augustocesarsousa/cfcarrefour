import Header from 'components/Header';
import { ProductListContext, ProductListContextData } from 'context/ProductListContext';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import { useState } from 'react';
// import ProductDetail from 'pages/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/styles/custom.scss';

function App() {
  const [productListContextData, setProductListContextData] = useState<ProductListContextData>({
    productListContext: []
  });

  return (
    <ProductListContext.Provider value={{ productListContextData, setProductListContextData }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":cep/products/" element={<Catalog />} />
              {/* <Route path=":cep/products/:productId" element={<ProductDetail product={product} />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ProductListContext.Provider>
  );
}

export default App;
