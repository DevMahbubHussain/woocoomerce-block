// import { useProduct } from "../hooks/usePorduct"

// const Edit = () => {
//   const {product,isLoading} = useProduct();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//     </div>
//   )
// }

// export default Edit;

import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { ProductContextProvider } from "../context/product-context";
import { useFetchProducts } from "../hooks/useFetchProduc";


export default function Edit() {

  const blockProps = useBlockProps();
  const { products, isLoading } = useFetchProducts();

  console.log("Real Product", products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>Product not found</div>;
  }

  const previewProduct = products && products.length > 0 ? products[0] : null;

  console.log("Preview",previewProduct)

  const TEMPLATE = [
    ['smart-store/product-title', {}],
    ['smart-store/product-image', {}],
    ['smart-store/price', {}],

  ];

  return (
    <div {...blockProps}>
      <ProductContextProvider product={previewProduct}>
        <InnerBlocks template={TEMPLATE} templateLock={false} />
      </ProductContextProvider>
    </div>
  );

}