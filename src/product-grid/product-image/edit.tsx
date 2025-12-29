import { useProductContext } from '../context/product-context';
import { useProduct } from '../hooks/useProduct';

export const ProductImage = () => {
   const product = useProductContext();
    const uiProduct = useProduct(product);
    if (!uiProduct.image) return null;

  return (
    <img
      src={uiProduct.image.src}
      alt={uiProduct.image.alt || uiProduct.name}
      className="product-image"
    />
  );
};

// export default ProductTitle;
