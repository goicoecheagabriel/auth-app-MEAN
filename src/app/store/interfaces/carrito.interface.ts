export interface Carrito {
  cartId: string;
  items: Item[];
  orderId: number;
  productsQuantity: number;
  shippingMethod?: string;
  shippingPerson?: {
    countryCode: string;
    countryName: string;
  };
  weight: number;
}

export interface Item {
  options: {
    Talla: string;
  },
  product: Product;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  sku: string;
  url: string;
  weight: number;
}
