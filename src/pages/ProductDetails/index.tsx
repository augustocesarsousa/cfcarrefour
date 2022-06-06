import BaseButton from 'components/BaseButton';
import { Product } from 'types/product';
import './styles.css';

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  return (
    <div className="product-detail-container">
      <div className="product-datail-principal base-card">
        <img
          className="product-detail-img"
          src={product.imageUrl}
          alt="Açúcar Refinado União 1Kg"
        />
        <div className="product-detail-name">
          <h1 className="product-name">{product.productName}</h1>
          <p className="product-brand">Marca: {product.brand}</p>
          <p className="product-price">R$ {product.price}</p>
          <BaseButton text="Ir até a loja" />
          <select
            className="product-payment-options base-input"
            placeholder="Condição de pagamento"
          >
            {product.paymentOptions.map((paymentOption) => (
              <option key={paymentOption.paymentSystem} value={paymentOption.paymentSystem}>
                {paymentOption.paymentName} até {paymentOption.installments}x de{' '}
                {paymentOption.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-detail-description base-card">
        <h6 className="product-description-title">Descrição do produto</h6>
        <p className="product-description-text">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
