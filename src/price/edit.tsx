import { useFetchProducts } from '../hooks/useFetchProduc';
import { useProduct } from '../hooks/usePorduct';

export default function Edit() {
    // const { product, isLoading, hasContext, priceHtml } = useProduct();
    const {products,isLoading} = useFetchProducts();

    console.log(isLoading); //false
    console.log("Product Data",products);


    if ( isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="wp-block-my-plugin-price">
            {isLoading ? (
                <span className="placeholder">$$$</span>
            ) : (
                <>
                <span dangerouslySetInnerHTML={{ __html: products[0].price_html }} />
                </>
            )}
        </div>
    );
}