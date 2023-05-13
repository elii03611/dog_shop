import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../Models/ProductModel";
import "./EditProduct.css";

function EditProduct(): JSX.Element {
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductModel>();
    let { prodToEdit } = useParams();
    const {register, handleSubmit, formState, setValue} = useForm<ProductModel>();

    useEffect(() => {
        productsService.getProdById(+prodToEdit)
        .then(prodEdit => {
            setProduct(prodEdit);
            setValue("id", prodEdit.id);
            setValue("name", prodEdit.name)
            setValue("type", prodEdit.type)
            setValue("price", prodEdit.price)
            setValue("stock", prodEdit.stock)
            setValue("image", prodEdit.image)
            setValue("imageName", prodEdit.imageName)
        
        })
        .catch(err => alert(err.message))
    },[])

    
    function send(formProduct:ProductModel){
        productsService.editProd(formProduct)
        .then(EditProduct => {
            alert(EditProduct.name + ":product has been edited");
            navigate("/list_products");
        })
        .catch(err => alert(err.message))
        
    }


    return (
        <div className="EditProduct Box">
			    <h2>edit product</h2>
            
            <form onSubmit={handleSubmit (send)}>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" {...register("name",{
                            required:{value:true,message:"name required"},
                            min:{value:15,message:"name too short"},
                            max:{value:200,message:"name too long"},
                        })}/>
                        <span>{formState.errors.name?.message}</span>
                        <label>Name</label>
    
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" {...register("type",{
                            required:{value:true,message:"type required"},
                            min:{value:15,message:"name too short"},
                            max:{value:200,message:"name too long"},
                        })}/>
                        <span>{formState.errors.type?.message}</span>
                        <label>Type</label>
                    </div>
    
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" {...register("price",{
                            required:{value:true,message:"price required"},
                            min:{value:15,message:"number too short"},
                            max:{value:200,message:"number too long"}
                        })}/>
                        <span>{formState.errors.price?.message}</span>
                        <label>Price</label>
                    </div>    
    
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" {...register("stock",{
                            required:{value:true,message:"stock required"},
                            min:{value:15,message:"number too short"},
                            max:{value:200,message:"number too long"}
                        })}/>
                        <span>{formState.errors.stock?.message}</span>
                        <label>Stock</label>
                    </div>
    
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" {...register("image")}/>
                        <img src={product?.image as unknown as string }/>
                        <span>{formState.errors.image?.message}</span>

                    </div> 
    
                    <button type="submit" className="btn btn-primary">edit product</button>
                </form>
        </div>
    );
}

export default EditProduct;
