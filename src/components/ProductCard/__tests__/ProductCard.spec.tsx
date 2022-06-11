import { render, screen } from '@testing-library/react';
import ProductCard from '..';

test('ProductCard should render card with given props', () => {
  const imageUrl =
    'https://carrefourbr.vteximg.com.br/arquivos/ids/14648737/batata-monalisa-carrefour-600-g-1.jpg?v=637511892564730000';
  const imageText = 'batata-monalisa-carrefour-600-g-1.jpg';
  const productName = 'Batata Monalisa Aprox. 1 Kg';
  const price = 3.99;

  render(
    <ProductCard
      imageText={imageText}
      imageUrl={imageUrl}
      price={price}
      productName={productName}
    />
  );

  expect(screen.getByAltText(imageText)).toBeInTheDocument();
  expect(screen.getByText(productName)).toBeInTheDocument();
  expect(screen.getByText(`R$ ${price}`)).toBeInTheDocument();
});
