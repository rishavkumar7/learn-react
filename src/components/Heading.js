import { LOGO_URL } from "./../utils/constants";

const Heading = () => {
    return (
        <div className="heading">
            <div>
                <img className="appIcon" src={LOGO_URL} />
            </div>
            <div className="navigationBar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;