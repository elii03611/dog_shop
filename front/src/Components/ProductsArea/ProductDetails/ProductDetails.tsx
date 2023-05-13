import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../Models/ProductModel";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {
    

    const [product, setProduct] = useState<ProductModel>();
    const params = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        const prodId = +params.prodId;
        productsService.getProdById(prodId)
            .then(p => setProduct(p))
            .catch(err => alert(err.message))

    }, [])

    // async function logJSONData() {
    //     const response = await fetch("http://127.0.0.1:8000/list_products/");
    //     const jsonData = await response.json();
    //     console.log(jsonData);
    //     return jsonData()

    // }
    
// function Demo() {
//         const [showAlert, setShowAlert] = useState(false);
      
//         const handleDeleteAll = () => {
//           // Perform your dangerous critical action here.
//           // Remember to close your alert
//           setShowAlert(false);
//         };
      
    // return (
//           <Button onClick={() => setShowAlert(true)}>
//             Delete all
//           </Button>
      
//           <Alert
//             isOpen={showAlert}
//             onClose={() => setShowAlert(false)} 
//             title="Delete all"
//             description="Are you sure you want to delete everything?"
//             confirmBtnLabel="Yes"
//             onConfirm={handleDeleteAll}
//           />
//         );
// }

    function delProd(): void {
        productsService.delProd(product.id)
        .then(()=>{
            alert(product.name + "has been deleted");
            navigate("/list_products");
        })
        .catch(err => alert(err.message))
    }
    
    return (
        <div className="ProductDetails Box">
            {product && <div>
                <div className="card">
                    <img src={product.image as unknown as string} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">name: {product.name}</h5>
                        <h5 className="card-title">type: {product.type}</h5>
                        <p className="card-text">price: {product.price}</p>
                        <p className="card-text">stock: {product.stock}</p>                    
                    </div>
                    <NavLink className="btn btn-primary" to={"/edit_prod/" + product.id}>edit</NavLink>
                    <button className="btn btn-danger" onClick={delProd}>delete</button>
                </div>
            </div>}
        </div>
    );
}

export default ProductDetails;
