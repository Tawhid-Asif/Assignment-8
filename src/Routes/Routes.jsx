import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import AppDetails from "../pages/AppDetails";
import LoadingSpinner from "../components/LoadingSpinner";
import AppNotFound from "../pages/AppNotFound";

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydratedFallbackElement:<LoadingSpinner></LoadingSpinner>,
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
        },
        {
          path: "/app-not-found", element: <AppNotFound />
        }
    ]

  }
])

export default router