import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, RouterProvider ,createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

const root = ReactDOM.createRoot(document.getElementById("root"));
let route =createBrowserRouter([
    {path:"/", element:<Home />},
    {path:"/history", element:<History />}
])
root.render(
    // <App />
    <RouterProvider router={route}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
