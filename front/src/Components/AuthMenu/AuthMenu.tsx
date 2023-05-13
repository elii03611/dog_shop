import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../../Redux/AuthStore";
import UserModel from "../Models/UserModel";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    
    const [user, setUser] = useState<UserModel>();
    
    useEffect(() => {
        setUser(authStore.getState().user);
    
    const unsubscribe = authStore.subscribe(()=>{
        setUser(authStore.getState().user);
    });      
    
    return () => {
        unsubscribe();
    }

    },[])


    return (
        <div className="AuthMenu">
			{!user && <> &nbsp;
            <NavLink to="login">Login</NavLink> &nbsp;
            <NavLink to="register">Register</NavLink>  &nbsp;

            </>}
        
        {
            user && <>
            <span> Welcome {user.username}</span>  &nbsp; <br />
            <NavLink to="logout">Logout</NavLink>
            </>
        }  
        </div>
    );
}

export default AuthMenu;
