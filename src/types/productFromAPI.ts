export type ProductFromAPI = {
  productId: string;
  productName: string;
  brand: string;
  link: string;
  description: string;
  Observações: string;
  items: item[];
};

export type item = {
  measurementUnit: string;
  images: image[];
  sellers: seller[];
};

type image = {
  imageId: string;
  imageText: string;
  imageUrl: string;
};

type seller = {
  sellerId: number;
  sellerName: string;
  addToCartLink: string;
  commertialOffer: commertialOffer;
};

type commertialOffer = {
  Installments: Installment[];
  Price: number;
};

type Installment = {
  Value: number;
  NumberOfInstallments: number;
  PaymentSystemName: string;
  Name: string;
};
