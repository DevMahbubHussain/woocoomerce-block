import { useProductContext } from '../context/product-context'
import {ProductTitle} from '../product-title';
import {ProductPrice} from '../product-price';
import {ProductImage} from '../product-image';

// const ALLOWED_BLOCKS = [
//   'smart-store/product-title',
//   'smart-store/product-price',
//   'smart-store/product-image',
// ];
// const TEMPLATE = [
//   ['smart-store/product-image'],
//   ['smart-store/product-title'],
//   ['smart-store/product-price'],
// ];


const ProductCard = () => {
  const product = useProductContext();

  return (
    <div className="product-card">
       <ProductTitle/>
       <ProductPrice/>
       <ProductImage/>
    </div>
  );
};

export default ProductCard;