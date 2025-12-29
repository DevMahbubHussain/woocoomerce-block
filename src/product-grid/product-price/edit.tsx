import { useProductContext } from '../context/product-context';
import { useProduct } from '../hooks/useProduct';

export const ProductPrice = () => {
  const product = useProductContext();
  const uiProduct = useProduct(product);

  return (
  <div
      className="product-price"
      dangerouslySetInnerHTML={{ __html: uiProduct.priceHtml }}
    />
  );
};

// export default ProductTitle;
