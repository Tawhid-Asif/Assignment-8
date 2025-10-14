import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>loading...</p>,
    children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/apps",
            element: <Apps></Apps>
        },
        {
            path:"/installation",
            element:<Installation></Installation>
        },
        {
          path:"/app/:id",
          element: <AppDetails></AppDetails>
        }
    ]

  }
])

export default router