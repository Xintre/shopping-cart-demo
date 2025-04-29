import { Product, ProductInCartType } from "../types";

export function areItemsEqual(
  a: ProductInCartType | Product,
  b: ProductInCartType | Product
): boolean {
  return (
    a.id === b.id &&
    ("color" in a && "color" in b ? a.color === b.color : true) &&
    ("size" in a && "size" in b ? a.size === b.size : true)
  );
}
