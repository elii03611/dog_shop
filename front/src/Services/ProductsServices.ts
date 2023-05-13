import axios from "axios";
import ProductModel from "../Components/Models/ProductModel";
import { ProductsActionType, productsStore } from "../Redux/ProductsState";
import config from "../Utils/Config";

class ProductsServices{

    public async allProducts():Promise<ProductModel[]>{

        let products = productsStore.getState().products;
        
        if (products.length === 0) {
            const response = await axios.get<ProductModel[]>(config.productsUrl);
            products = response.data;
            productsStore.dispatch({type:ProductsActionType.AllProducts, payload:products})
        }
        return products
    }

    public async getProdById(id: number):Promise<ProductModel>{
        
        let products = productsStore.getState().products;

        let product = products.find(p => p.id === id);
        if (product) {
            const response = await axios.get<ProductModel>(config.productsDetailsUrl + product.id);
            const products = response.data;
            productsStore.dispatch({type:ProductsActionType.Detail, payload:products})

        }
        return product;
    }
     

    public async addProd(product: ProductModel):Promise<ProductModel>{
        const formData = new FormData();
    
        formData.append("name", product.name)
        formData.append("price", product.price.toString())
        formData.append("type", product.type.toString())
        formData.append("stock", product.stock.toString())
        formData.append("image", product.image.item(0))

        const response = await axios.post<ProductModel>(config.productsAddUrl, formData)
        const addProd = response.data;
        
        productsStore.dispatch({type:ProductsActionType.AddProd, payload:addProd})

        return addProd;
    }
    public async editProd(product: ProductModel):Promise<ProductModel>{
        const formData = new FormData();
        
        formData.append("name", product.name)
        formData.append("type", product.type.toString())
        formData.append("price", product.price.toString())
        formData.append("stock", product.stock.toString())
        if (product.image){
            formData.append("image", product.image.item(0))
        }
        const response = await axios.put<ProductModel>(config.productsEditUrl + product.id, formData)
        const editprod = response.data;
        productsStore.dispatch({type:ProductsActionType.EditProd, payload:editprod})
        return editprod;
    }

    public async delProd(id:number):Promise<void>{
        await axios.delete(config.productsDelUrl + id);
        productsStore.dispatch({type:ProductsActionType.DelProd, payload:id})
    }


}

const productsService = new ProductsServices();
export default productsService;