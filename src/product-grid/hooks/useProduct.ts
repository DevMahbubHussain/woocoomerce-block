import type { ProductResponse } from "../types/product-response";

export function useProduct(product: ProductResponse) {
  const primaryImage = product.images?.[0];
  return {
    id: product.id,
    name: product.name,
    permalink: product.permalink,
    image: primaryImage
      ? {
          src: primaryImage.src,
          alt: primaryImage.alt,
        }
      : null,

    priceHtml: product.prices.price_html ?? product.prices.price,
  };
}
