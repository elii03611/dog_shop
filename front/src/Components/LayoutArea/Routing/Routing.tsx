import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import NotFound404 from "../NotFound404/NotFound404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/*" element={<NotFound404/>}></Route>

                <Route path="/home" element={<Home/>}></Route>
                <Route path="/list_products" element={<ProductsList/>}></Route>
                <Route path="/add_product" element={<AddProduct/>}></Route>
                <Route path="/product_detail/:prodId" element={<ProductDetails/>}></Route>
                <Route path="/edit_prod/:prodToEdit" element={<EditProduct/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/logout" element={<Logout/>}></Route>





            </Routes>
        </div>
    );
}

export default Routing;
