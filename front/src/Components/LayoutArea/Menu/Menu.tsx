import { NavLink } from "react-router-dom";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/"></NavLink><br/>
            <NavLink to="/home">home</NavLink><br/>
			<NavLink to="/list_products">products</NavLink><br/>
            <NavLink to="/add_product">add products ➕</NavLink> <br />
            <TotalProducts/>
            



        </div>
    );
}

export default Menu;
