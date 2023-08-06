
import './Actual.css';
import { Link } from "react-router-dom";


function Actual() {

    return (
        <div className="cont">
        <div className="actual">
            <h1 className="h1-actual">Run App</h1>
            <div className="cont-btn">
            
            <Link to="/Runner" ><button className="btn-main">Empezar</button></Link>
            <Link to="/Formulario" ><button className="btn-main">Registrarme</button></Link>


            </div>
        </div></div>
    );
}
export default Actual