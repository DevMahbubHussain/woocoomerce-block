// import apiFetch from "@wordpress/api-fetch";
// import { useState, useEffect } from "@wordpress/element";
// import { ProductResponseItem } from "../types/product-response";

// export const useFetchProducts = () => {
//     const [products, setProducts] = useState<ProductResponseItem[]>([]);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [error, setError] = useState<unknown>(null);

//     useEffect(() => {
//         setIsLoading(true);
//         apiFetch<ProductResponseItem[]>({ path: '/wc/store/v1/products' })
//             .then((response) => {
//                 setProducts(response);
//                 setIsLoading(false);
//             })
//             .catch((e) => {
//                 console.error("API Error:", e);
//                 setError(e);
//                 setIsLoading(false);
//             });
//     }, []);

//     return { products, isLoading, error };
// };