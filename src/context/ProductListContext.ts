import { createContext } from 'react';
import { Product } from 'types/product';

export type ProductListContextData = {
  productListContext: Product[];
};

export type ProductListContextType = {
  productListContextData: ProductListContextData;
  setProductListContextData: (productListContextData: ProductListContextData) => void;
};

export const ProductListContext = createContext<ProductListContextType>({
  productListContextData: {
    productListContext: []
  },
  setProductListContextData: () => null
});
