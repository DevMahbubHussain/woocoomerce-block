import { useProductContext } from '../context/product-context';

export const ProductTitle = () => {
  const { name, permalink } = useProductContext();

  return (
    <h2 className="product-title">
      <a href={permalink}>{name}</a>
    </h2>
  );
};

// export default ProductTitle;
