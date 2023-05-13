import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import UserModel from "../Components/Models/UserModel";

export class AuthStore {

    public token:string = null;
    public user: any = null;

    public constructor() {

        this.token = localStorage.getItem("token")
        if (this.token) {
            const container: any = jwtDecode(this.token);
            const user: UserModel = {
                id: container.user_id,
                firstName: container.firstName,
                lastName: container.lastName,
                username: container.username,
                email: container.email,
                
            };
            this.user = user
        }
    }

}

export enum AuthActionType {

    Register = "Register",
    Login = "Login",
    Logout = "Logout"

}


export interface AuthAction {
    type: AuthActionType,
    payload?: string;
}


export function authReducer(correntState = new AuthStore(), action: AuthAction) {
    const newState = {...correntState};
    
    switch (action.type) {

        case AuthActionType.Register:
        case AuthActionType.Login:

            newState.token = action.payload;
            localStorage.setItem("token", action.payload);
            const container: any = jwtDecode(newState.token)
            const user: UserModel = {
                id: container.user_id,
                firstName: container.firstName,
                lastName: container.lastName,
                username: container.username,
                email: container.email,


            };
            newState.user = user;
            break;

        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;

        }   
    
    return newState;

}

export const authStore = createStore(authReducer)