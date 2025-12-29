import { useFetchProducts } from '../hooks/useFetchProduc';

export default function Edit() {
    const { products, isLoading } = useFetchProducts();
    console.log(isLoading); //false
    console.log("Product Data", products);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="wp-block-my-plugin-price">
            {isLoading ? (
                <span className="placeholder">$$$</span>
            ) : (
                <>
                    <img
                        src={products[0]?.images?.[0]?.src}
                        alt={products[0]?.name || 'Product'}
                    />
                </>
            )}
        </div>
    );

}