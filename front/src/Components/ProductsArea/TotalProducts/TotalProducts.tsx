import { useEffect, useState } from "react";
import { productsStore } from "../../../Redux/ProductsState";
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {
    
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount(productsStore.getState().products.length)
    
    const unsubscribe = productsStore.subscribe(() => {
        setCount(productsStore.getState().products.length)
    })
    
    return () => {
        unsubscribe();
    }
    
    },[])
    
    return (
        <div className="TotalProducts">
			<h4>Total Products: {count}</h4>
        </div>
    );
}

export default TotalProducts;
