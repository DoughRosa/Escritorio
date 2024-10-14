import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Penal from "../pages/Penal";
import Transito from "../pages/Transito";
import Sobre from "../pages/Sobre";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/penal",
        element: <Penal/>
    },
    {
        path: "/transito",
        element: <Transito/>
    },
    {
        path: "/sobre",
        element: <Sobre/>
    },
]);

function AppRoutes(){
    return <RouterProvider router={router} />;
};

export default AppRoutes;