export type ProductFromAPI = {
  productId: string;
  productName: string;
  brand: string;
  link: string;
  description: string;
  items: item[];
};

type item = {
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
  Installments: Installments;
  Price: number;
};

type Installments = {
  Installments: Installment[];
};

type Installment = {
  Value: number;
  NumberOfInstallments: number;
  PaymentSystemName: number;
};
