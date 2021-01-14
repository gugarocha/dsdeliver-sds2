import { Product } from "./types";

export function checkIsSelected(selectedProduct: Product[], product: Product) {
  return selectedProduct.some(item => item.id === product.id)
};

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return formatter.format(price);
};