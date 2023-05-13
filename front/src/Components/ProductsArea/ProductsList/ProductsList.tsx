import { useEffect, useState } from "react";
import App from "../../../App";
import productService from "../../../Services/ProductsServices";
import ProductModel from "../../Models/ProductModel";
import Loading from "../../SharedArea/Loading/Loading";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsList.css";

function ProductsList(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>([]);
    useEffect(()=>{
        productService.allProducts()
            .then(prodFromBack => setProducts(prodFromBack))
            .catch(err => alert(err.message))
    },[])

    return (
            <div className="container">
                {products.length === 0 && <Loading />} 	
                    {products.map(p=> 
                    <div className="list-item">
                        <ProductsCard key={p.id} prod={p}/>
                    </div>
                    )}
            </div>
    );
}

export default ProductsList;
