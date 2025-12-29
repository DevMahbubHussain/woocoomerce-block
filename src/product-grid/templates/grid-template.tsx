import { ProductProvider } from "product-grid/context/product-context";
import { useProducts } from "../hooks/usePorducts";
import ProductCard from "product-grid/product-card/edit";

interface GridTemplateProps {
    perPage?: number;
    category?: string;
}
const GridTemplate = ({ perPage = 6, category:any }) => {
    const { products, loading, error } = useProducts({ perPage, category:any });
    if (loading) return <p>Loading products…</p>;
    if (error) return <p>Error loading products: {error.message}</p>;
    if (!products.length) return <p>No products found.</p>;

     return (
    <div className="product-grid grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductProvider key={product.id} value={product}>
          <ProductCard />
        </ProductProvider>
      ))}
    </div>
  );
}

export default GridTemplate;