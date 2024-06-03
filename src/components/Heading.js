import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "./../utils/constants";

const Heading = () => {
    const [login, setLogin] = useState("Login");

    return (
        <div className="heading">
            <div>
                <img className="appIcon" src={LOGO_URL} />
            </div>
            <div className="navigationBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li className="loginButton"><button onClick={() => {setLogin(login === "Login" ? "Logout" : "Login")}}>{login}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;