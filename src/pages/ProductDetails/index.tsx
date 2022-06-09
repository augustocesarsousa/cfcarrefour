import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import BaseButton from 'components/BaseButton';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/product';
import './styles.css';

type UrlParams = {
  cep: string;
};

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const { cep } = useParams<UrlParams>();

  return (
    <div className="product-detail-container">
      <div className="product-detail-principal base-card">
        <div className="product-detail-img-container">
          <Link to={`/${cep}/products`} className="link-goback">
            <div className="goback-button">
              <ArrowIcon />
              <p>Voltar</p>
            </div>
          </Link>
          <div className="product-detail-img-content">
            <img
              className="product-detail-img"
              src={product.imageUrl}
              alt="Açúcar Refinado União 1Kg"
            />
          </div>
        </div>
        <div className="product-detail-name-content">
          <div className="product-detail-name-left">
            <h1 className="product-name">{product.productName}</h1>
            <p className="product-brand">Marca: {product.brand}</p>
            <p className="product-price">R$ {product.price}</p>
          </div>
          <div className="product-detail-name-right">
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
      </div>
      <div className="product-detail-description base-card">
        <h6 className="product-description-title">Descrição do produto</h6>
        <p className="product-description-text">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
