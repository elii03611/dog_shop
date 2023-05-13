import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import UserModel from "../../Models/UserModel";
import "./Register.css";

function Register(): JSX.Element {

    const {register, handleSubmit} = useForm<UserModel>();
    const navigate = useNavigate();
    console.log(register)
    async function send(user:UserModel) {    

        try {
            await authService.register(user);
            alert("welcome");
            navigate("/home");
        }
        catch (err:any) {
            alert(err.message);
        }
    }

    return (
        <div className="Register Box">
            <form onSubmit={handleSubmit(send)}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" {...register("firstName")}/>
                    <label>First Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" {...register("lastName")}/>
                    <label>Last Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" {...register("username")}/>
                    <label>User Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" {...register("email")}/>
                    <label>email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" {...register("password")}/>
                    <label>Password</label>
                </div>

                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;
