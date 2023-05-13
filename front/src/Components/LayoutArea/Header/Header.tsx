import App from "../../../App";
import AuthMenu from "../../AuthMenu/AuthMenu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <AuthMenu/>
			<h1>DOG SHOP</h1>
        </div>
    );
}

export default Header;
