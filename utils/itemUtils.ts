import { Product, ProductInCart } from "../types";

export function areItemsEqual(
  a: ProductInCart | Product,
  b: ProductInCart | Product
): boolean {
  return (
    a.id === b.id &&
    ("color" in a && "color" in b ? a.color.id === b.color.id : true) &&
    ("size" in a && "size" in b ? a.size === b.size : true)
  );
}
