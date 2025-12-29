// import apiFetch from "@wordpress/api-fetch";
// import { useState,useEffect} from "@wordpress/element"
// import { ProductResponseItem } from "../types/produc-response";

// export const useProduct = () => {
//     const [products, setProducts] = useState<ProductResponseItem[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//       useEffect(() => {
//         setLoading(true);
//         try{
//         apiFetch<ProductResponseItem[]>({
//                     path: '/wc/store/v1/products',
//                 }).then((response) => {
//                     setProducts(response);
//                     setLoading(false);
//                 });
//         }
//         catch(e){
//             console.log(e);
//             setLoading(false);
//         }

//     },[]);
//     return {products,loading};
// }



// import { useProductContext  } from "../context/product-context";

// export const useProduct = () => {
//     const context = useProductContext();
//     console.log("Context",context);
//     if (!context) {
//         throw new Error("useProduct must be used within a ProductProvider");
//     }

//     const { product, isLoading, hasContext } = context;


//     console.log("Product Context", product);

//     return {
//         product,
//         isLoading,
//         hasContext,
//         priceHtml: product?.price_html || '',
//         canAddToCart: product?.is_purchasable && product?.is_in_stock,
//     };
// }






import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import type { ProductResponse } from '../types/product-response';

interface UseProductsOptions {
  perPage?: number;
  category?: string;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (options.perPage) params.append('per_page', options.perPage.toString());
        if (options.category) params.append('category', options.category);

        const data = await apiFetch({
          path: `/wc/store/v1/products?${params.toString()}`,
        });

        // Normalize data to ProductResponse
        const normalized: ProductResponse[] = (data as any[]).map((product) => ({
          id: product.id,
          name: product.name,
          slug: product.slug,
          permalink: product.permalink,
          images: (product.images || []).map((img: any) => ({
            id: img.id,
            src: img.src,
            alt: img.alt,
          })),
          prices: {
            price: product.prices?.price,
            regular_price: product.prices?.regular_price,
            sale_price: product.prices?.sale_price,
            price_html: product.prices?.price_html,
          },
          short_description: product.short_description,
        }));

        setProducts(normalized);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [options.perPage, options.category]);

  return { products, loading, error };
}



