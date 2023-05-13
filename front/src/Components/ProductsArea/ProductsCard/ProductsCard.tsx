import { NavLink, useNavigate, useParams } from "react-router-dom";
import config from "../../../Utils/Config";
import ProductModel from "../../Models/ProductModel";
import "./ProductsCard.css";
import { useEffect, useState } from "react";
import productsService from "../../../Services/ProductsServices";

interface ProductsCardProps {
    prod:ProductModel;
}



function ProductsCard(props: ProductsCardProps): JSX.Element {  
        
    return (
        <div className="ProductsCard"> <br />
            <div className="col"> 
                <div className="card">
                    <NavLink to={"/product_detail/" + props.prod.id}>
                    <img src={props.prod.image as unknown as string} className="card-img-top" alt="..."/>
                    </NavLink>
                    <div className="card-body"> 
                        <h5 className="card-title">name: {props.prod.name}</h5>
                        <h5 className="card-title">type: {props.prod.type}</h5>
                        <p className="card-text">price: {props.prod.price}</p>
                        <p className="card-text">stock: {props.prod.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;



