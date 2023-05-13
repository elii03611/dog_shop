import { createStore } from "redux";
import ProductModel from "../Components/Models/ProductModel";

export class ProductsState {
    public products: ProductModel[] = [];
}


export enum ProductsActionType {
    AllProducts = "All Products",
    AddProd = "Add Product",
    Detail = "Detail",
    EditProd = "Edit Product",
    DelProd = "Del Products"
}

export interface ProductsAction {
    type :ProductsActionType,
    payload: any;
}


export function productsReducer(currentState = new ProductsState(), action: ProductsAction) {

    const newState = {...currentState};

    switch (action.type) {

        case ProductsActionType.AllProducts:
            newState.products = action.payload;
            break;
        
        case ProductsActionType.AddProd:
            newState.products.push(action.payload);
            break;

        case ProductsActionType.EditProd:
            const Edit = newState.products.findIndex(p => p.id === action.payload.id)
            if (Edit >= 0) {
                newState.products[Edit] = action.payload;
            }
            break;
            
        case ProductsActionType.Detail:
            const Detail = newState.products.findIndex(p => p.id === action.payload.id)
            if (Detail >= 0) {
                newState.products[Detail] = action.payload;
            }
            break;
            
        
        case ProductsActionType.DelProd:
            const Del = newState.products.findIndex(p => p.id === action.payload)
            if (Del >= 0) {
                newState.products.splice(Del, 1);
            }
            break;
    }

    return newState

}


// store

export const productsStore = createStore(productsReducer);


