import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import BaseButton from 'components/BaseButton';
import { ProductListContext } from 'context/ProductListContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductFromAPI } from 'types/productFromAPI';
import './styles.css';

type UrlParams = {
  cep: string;
  productId: string;
};

const ProductDetail = () => {
  const { cep, productId } = useParams<UrlParams>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { productList }: any = useContext(ProductListContext);
  const product: ProductFromAPI[] = productList.filter((product: ProductFromAPI) =>
    product.productId.includes(`${productId}`)
  );

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
              src={product[0].items[0].images[0].imageUrl}
              alt={product[0].items[0].images[0].imageText}
            />
          </div>
        </div>
        <div className="product-detail-name-content">
          <div className="product-detail-name-left">
            <h1 className="product-name">{product[0].productName}</h1>
            <p className="product-brand">Marca: {product[0].brand}</p>
            <p className="product-price">
              R$ {product[0].items[0].sellers[0].commertialOffer.Price}
            </p>
          </div>
          <div className="product-detail-name-right">
            <BaseButton text="Ir até a loja" />
            <select
              className="product-payment-options base-input"
              placeholder="Condição de pagamento"
            >
              {product[0].items[0].sellers[0].commertialOffer.Installments.sort((a, b) =>
                a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
              ).map((installment) => (
                <option key={installment.PaymentSystemName} value={installment.PaymentSystemName}>
                  {installment.Name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="product-detail-description base-card">
        <h6 className="product-description-title">Descrição do produto</h6>
        <p className="product-description-text">{product[0].description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
