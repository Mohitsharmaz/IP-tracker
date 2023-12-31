import logo from "./logo.svg";
import styles from "./index.css";
import Home from "./pages/Home";
import { Route, RouterProvider, Routes, createHashRouter } from "react-router-dom";

function App() {
  let route = createHashRouter([
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
