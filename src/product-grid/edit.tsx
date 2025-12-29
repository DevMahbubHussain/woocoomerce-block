import apiFetch from "@wordpress/api-fetch";
import { useBlockProps } from "@wordpress/block-editor";
import { useState,useEffect} from "@wordpress/element"
import { ProductResponseItem } from "src/types/produc-response";


export default function Edit() {
    const [products, setProducts] = useState<ProductResponseItem[]>([]);
    const[loading,setLoading] = useState(false);
    const blockProps = useBlockProps();


    // fetch products form store api end point usiing wordpress fetchApi
    useEffect(() => {
        setLoading(true);
        try{
        apiFetch<ProductResponseItem[]>({
                    path: '/wc/store/v1/products',
                }).then((response) => {
                    setProducts(response);
                    setLoading(false);
                });
        }
        catch(e){
            console.log(e);
            setLoading(false);
        }
        
    },[]);

    return(
        <div {...blockProps}>
            <h2>Product Grid</h2>
            <ul>
                {products.map((product) => (
                    <li key={product?.id}>
                        <h3>{product?.name}</h3>
                        <p>{product?.description}</p>
                        <img src={product?.images[0]?.src} alt={product?.name} style={{width:"150px", height:"150px"}} />
                    </li>
                ))}
            </ul>
        </div>
    );

}