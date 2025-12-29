import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes } from './attributes-types';
import { useProducts } from './hooks/usePorducts';
import { useBlockProps } from '@wordpress/block-editor';
import { ProductProvider } from './context/product-context';
import ProductCard from './product-card/edit';


type props = BlockEditProps<BlockAttributes>;

export default function edit({ attributes, setAttributes }: props) {
    const blockProps = useBlockProps();
    const { perPage = 6, category = '', template = 'grid' } = attributes;

    const { products, loading, error } = useProducts({ perPage, category })

    if (loading) return <p>Loading products…</p>;
    if (error) return <p>Error loading products: {error.message}</p>;
    if (!products.length) return <p>No products found.</p>;



    return (
        <div className={`product-grid product-grid--${template}`}>
            {
                products.map((product)=>(
                    <ProductProvider key={product.id} value={product}>
                        <ProductCard/>
                    </ProductProvider>
                ))
            }



        </div>
    )
}

