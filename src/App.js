import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";

const AppContainer = () => {
    return (
        <div>
            <Heading />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);