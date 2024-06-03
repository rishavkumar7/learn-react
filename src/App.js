import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Heading from "./components/Heading";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/contactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

const AppContainer = () => {
    return (
        <div>
            <Heading />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);