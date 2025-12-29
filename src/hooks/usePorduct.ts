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



import { useProductContext  } from "../context/product-context";

export const useProduct = () => {
    const context = useProductContext();
    console.log("Context",context);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }

    const { product, isLoading, hasContext } = context;


    console.log("Product Context", product);

    return {
        product,
        isLoading,
        hasContext,
        priceHtml: product?.price_html || '',
        canAddToCart: product?.is_purchasable && product?.is_in_stock,
    };
}
