// import axios from 'axios';
import Header from 'components/Header';
import ProductDetail from 'pages/ProductDetails';
import { useState } from 'react';
import './App.css';
// import { useEffect, useState } from 'react';
import './assets/styles/custom.scss';
import { Product } from './types/product';
// import { Sellers } from './types/seller';

function App() {
  // const [sellers, setSellers] = useState<Sellers[]>();
  // const [products, setProducts] = useState<Product[]>();
  const [product, setProduct] = useState<Product>({
    productId: '0001',
    imageUrl:
      'https://carrefourbr.vteximg.com.br/arquivos/ids/15813910/197564_1.jpg?v=637540293323270000',
    productName: 'Açúcar Refinado União 1Kg',
    brand: 'União Mundial',
    price: 3.99,
    paymentOptions: [
      {
        paymentSystem: '1',
        paymentName: 'American Express',
        value: 3.99,
        installments: 1
      },
      {
        paymentSystem: '2',
        paymentName: 'Visa',
        value: 3.99,
        installments: 1
      },
      {
        paymentSystem: '3',
        paymentName: 'Mastercard',
        value: 3.99,
        installments: 1
      }
    ],
    description:
      'O Açúcar Refinado União é tradicionalmente mais branquinho e fininho, dissolve rápido nas suas receitas! Ideal para doces, misturas e sobremesas. O açúcar é a forma mais rápida de fornecer glicose para o corpo. Esse componente é essencial para o funcionamento do cérebro, da retina e dos rins. A glicose ainda auxilia na proliferação das Bifidobactérias e dos Lactobacillus sp. Essas bactérias compõem a flora intestinal e contribuem para a eliminação de bactérias nocivas como a Escherichia coli e o Clostridium. Sem contar que o açúcar é uma importante fonte de cálcio, fósforo, ferro, cloro, potássio, sódio, magnésio e de vitaminas do complexo B. Porém, é recomendado consumir com moderação para evitar o excesso de glicose no sangue. Aproveite e compre Açúcar Refinado União aqui no Carrefour.'
  });

  // useEffect(() => {
  //   axios
  //     .get('/api/checkout/pub/regions?country=BRA&postalCode=17560246')
  //     .then((response) => {
  //       setSellers(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const sellerId = sellers?.map((obj) => obj.sellers[2].id);

  // useEffect(() => {
  //   axios
  //     .get('/api/catalog_system/pub/products/search?fq=' + sellerId)
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}

export default App;
