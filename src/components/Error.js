import { useRouteError } from "react-router-dom";

const Error = () => {
    const routeError = useRouteError();

    return (
        <div>
            <h1>Oops !!!</h1>
            <h2>{routeError.status} : {routeError.statusText}</h2>
        </div>
    );
};

export default Error;