export type Product = {
  productId: string;
  imageUrl: string;
  productName: string;
  brand: string;
  price: number;
  link: string;
  description: string;
  sacForne: string;
  observation: string;
  addToCartLink: string;
  measurementUnit: string;
  images: Image[];
  installments: Installment[];
};

type Image = {
  imageUrl: string;
  imageText: string;
};

type Installment = {
  instalmentName: string;
  value: number;
  numberOfInstallments: number;
};
