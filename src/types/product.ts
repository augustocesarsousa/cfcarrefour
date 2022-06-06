import { PaymentOption } from './paymentOption';

export type Product = {
  productId: string;
  imageUrl: string;
  productName: string;
  brand: string;
  price: number;
  paymentOptions: PaymentOption[];
  description: string;
};
