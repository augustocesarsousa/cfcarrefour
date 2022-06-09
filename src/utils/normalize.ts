import { ProductFromAPI } from 'types/productFromAPI';
import { Sellers } from 'types/seller';

export const getSellerName = (sellersListFromAPI: Sellers[]) => {
  return sellersListFromAPI[0].sellers[0].name;
};

export const setProductListContext = (productListFromAPI: ProductFromAPI[]) => {
  console.log(productListFromAPI);
};
