import { useFetchProducts } from '../hooks/useFetchProduc';
import { useProduct } from '../hooks/usePorduct';

export default function Edit() {
    const { product, isLoading, hasContext, priceHtml } = useProduct();
    // const {products,isLoading} = useFetchProducts();

    console.log(isLoading);
    console.log("Product Data",product);
    console.log(hasContext);
    console.log(priceHtml);


    if ( isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="wp-block-my-plugin-price">
            {isLoading ? (
                <span className="placeholder">Product Title Will Render</span>
            ) : (
                <>
                <span>{ product.name }</span>
                </>
            )}
        </div>
    );
}