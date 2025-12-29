// import { ProductResponseItem } from "../types/product-response";
// import { createContext, useContext } from '@wordpress/element';
// import { ReactNode } from "react";

// /**
//  * Default Data
//  */
// const defaultProductData: ProductResponseItem = {
//     id: 0,
// 	name: '',
//     slug: '',
// 	parent: 0,
// 	type: 'simple',
// 	variation: '',
// 	permalink: '',
// 	sku: '',
// 	short_description: '',
// 	description: 'Product Description',
// 	on_sale: false,
// 	prices: {
// 		currency_code: 'USD',
// 		currency_symbol: '$',
// 		currency_minor_unit: 2,
// 		currency_decimal_separator: '.',
// 		currency_thousand_separator: ',',
// 		currency_prefix: '$',
// 		currency_suffix: '',
// 		price: '0',
// 		regular_price: '0',
// 		sale_price: '0',
// 		price_range: null,
// 	},
// 	price_html: '100',
// 	average_rating: '0',
// 	review_count: 0,
// 	images: [],
// 	categories: [],
// 	tags: [],
// 	attributes: [],
// 	variations: [],
// 	has_options: false,
// 	is_purchasable: false,
// 	is_in_stock: false,
// 	is_on_backorder: false,
// 	low_stock_remaining: null,
// 	sold_individually: false,
// 	add_to_cart: {
// 		text: 'Add to cart',
// 		description: 'Add to cart',
// 		url: '',
// 		minimum: 1,
// 		maximum: 99,
// 		multiple_of: 1,
// 	}
// } as ProductResponseItem;

// /**
//  * 2. The Context
//  */
// const ProductContext = createContext({
//     product: defaultProductData,
//     hasContext: false,
//     isLoading: false,
// });

// /**
//  * The Hook
//  */
// export const useProductContext = () => {
//     const context = useContext(ProductContext);
//     return context;
// };

// /**
//  * 4. The Provider Component
//  */
// interface ProductContextProviderProps {
//     product?: ProductResponseItem | null;
//     children: ReactNode;
//     isLoading?: boolean;
// }

// export const ProductContextProvider = ({ 
//     product, 
//     children, 
//     isLoading = false 
// }: ProductContextProviderProps) => {
    
//     const contextValue = {
//         product: product || defaultProductData,
//         isLoading,
//         hasContext: !!product, 
//     };

//     return (
//         <ProductContext.Provider value={contextValue}>
//             <div className={isLoading ? 'is-loading' : ''}>
//                 {children}
//             </div>
//         </ProductContext.Provider>
//     );
// };


import { createContext, useContext } from '@wordpress/element';
import type { ProductResponse } from '../types/product-response';

const ProductContext = createContext<ProductResponse | null>(null);

export const ProductProvider = ProductContext.Provider;

export function useProductContext(): ProductResponse {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      'useProductContext must be used within a ProductProvider'
    );
  }

  return context;
}

