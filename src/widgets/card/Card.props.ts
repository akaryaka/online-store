export interface Props {
  price: string;
  priceSales?: string;
  title: string;
  img: string;
  type: "product" | "sale" | "balance" | string;
  rating: number;
  favorites: boolean;
}
