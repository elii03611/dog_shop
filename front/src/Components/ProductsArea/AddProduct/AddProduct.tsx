import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../Models/ProductModel";
import "./AddProduct.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import { SERVER } from "../../../MyServer";

function AddProduct(): JSX.Element {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<ProductModel>();
  const SERVER = "http://127.0.0.1:8000/";
  const [sname, setsName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  // const [ImageName, setImageName] = useState("");
  const [image, setImage] = useState("");

  async function send(product: ProductModel): Promise<void> {
    try {
      const addprod = await productsService.addProd(product);
      navigate("/list_products");
    } catch (err: any) {
      alert(err.message);
    }
  }
  async function addProd(): Promise<void> {
    await axios.post(SERVER + "add_product/", {
      name: sname,
      type,
      price,
      stock,
      // imageName,
      image,
    });
    fetch("http://localhost:3000/add_product/").then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong ...");
      }
    });
  }

  return (
    <div className="AddProduct Box">
      <h2>add product</h2>

      <form onSubmit={handleSubmit(send)}>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setsName(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInput"
            {...register("name", {
              required: { value: true, message: "name required" },
              min: { value: 15, message: "name too short" },
              max: { value: 200, message: "name too long" },
            })}
          />
          <span>{formState.errors.name?.message}</span>
          <label>Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            onChange={(e) => setType(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInput"
            {...register("type", {
              required: { value: true, message: "name required" },
              min: { value: 15, message: "name too short" },
              max: { value: 200, message: "name too long" },
            })}
          />
          <span>{formState.errors.type?.message}</span>
          <label>Type</label>
        </div>

        <div className="form-floating mb-3">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            id="floatingInput"
            {...register("price", {
              required: { value: true, message: "price required" },
              min: { value: 15, message: "number too short" },
              max: { value: 5000, message: "number too long" },
            })}
          />
          <span>{formState.errors.price?.message}</span>
          <label>Price</label>
        </div>

        <div className="form-floating mb-3">
          <input
            onChange={(e) => setStock(e.target.value)}
            type="number"
            className="form-control"
            id="floatingInput"
            {...register("stock", {
              required: { value: true, message: "stock required" },
              min: { value: 15, message: "number too short" },
              max: { value: 5000, message: "number too long" },
            })}
          />
          <span>{formState.errors.stock?.message}</span>
          <label>Stock</label>
        </div>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setImage(e.target.value)}
            type="file"
            className="form-control"
            id="inputGroupFile01"
            accept="image/*"
            {...register("image", {})}
          />
        </div>

        <button onClick={() => addProd()} className="btn btn-primary">
          add product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
