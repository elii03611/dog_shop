import "./Loading.css";
import loading from "../../../Assets/Images/loading-gif.gif"
function Loading(): JSX.Element {
    return (
        <div className="Loading">
            <img src={loading} /><h4>loading</h4>
	
        </div>
    );
}

export default Loading;
