import React from "react";
import ReactDOM from "react-dom/client";

const fullNameElement = <h1>Rishav Kumar is my full name</h1>

const Title = () => <h2>Kumar is my title</h2>;

const Name = () => {
    return (<div>
        {fullNameElement}
        <h2>Rishav is my name</h2>
        {Title()}
        <Title />
        <Title></Title>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Name />);