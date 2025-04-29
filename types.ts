export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  availableSizes: string[];
  colors: { id: string; name: string; image: string }[];
  images: string[];
};

export type ProductInCartType = Pick<Product, "id" | "price" | "name"> & {
  color: string;
  size: string;
  amount: number;
};
