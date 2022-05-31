export type Sellers = {
  id: string;
  sellers: Seller[];
};

export type Seller = {
  id: string;
  name: string;
  logo?: string;
};
