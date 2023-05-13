import axios from "axios";
import CredentialsModel from "../Components/Models/CredentialsModel";
import TokenObtainModel from "../Components/Models/TokenObtainModel";
import UserModel from "../Components/Models/UserModel";
import { AuthActionType, authStore } from "../Redux/AuthStore";
import config from "../Utils/Config";

class AuthService {
    
    public async register(user:UserModel):Promise<void>{
        
        const response = await axios.post<UserModel>(config.registerUrl, user)
        const token = response.data;
        
        authStore.dispatch({type:AuthActionType.Register})
    }
  
    public async login(credentials: CredentialsModel):Promise<void>{
        
        const response = await axios.post<TokenObtainModel>(config.loginUrl, credentials)
        const token = response.data.access;
        
        authStore.dispatch({type:AuthActionType.Login, payload:token}) 

    }

    public logout():void{

        authStore.dispatch({type:AuthActionType.Logout});

    }
        
        

}

const authService = new AuthService();

export default authService;
