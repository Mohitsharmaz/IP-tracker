import logo from "./logo.svg";
import styles from "./index.css";
import Home from "./pages/Home";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";

function App() {
  let route = createBrowserRouter([
    {
      path:"/", 
      Component:<Home />
    }
  ])
  return (
    <div className="App">
    <RouterProvider router ={route}/>
    </div>
  );
}

export default App;
