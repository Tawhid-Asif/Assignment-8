import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/home",
            element: <Home></Home>
        },
        {
            path:"/apps",
            element: <Apps></Apps>
        },
        {
            path:"/installation",
            element:<Installation></Installation>
        }
    ]

  }
])

export default router