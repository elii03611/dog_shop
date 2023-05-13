import { useEffect, useState } from "react";
import "./Home.css";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";

function Home(): JSX.Element {


    const [count, setCount] = useState<number>(0)

    function less() {
        setCount(less => less -1);
    }
    function add() {
        setCount(prev => prev +1);
    }
    function rest(){
        setCount(rest => rest = 0)
    }
    
    return (
        <div className="Home">
            <h1>home</h1>
            <button onClick={less}>-</button>&nbsp;
            <span>{count}</span>&nbsp;
            <button onClick={add}>+</button>&nbsp;<br /> <br />
            <button onClick={rest}>rest</button>&nbsp;

        </div>
        

    );


}

export default Home;
