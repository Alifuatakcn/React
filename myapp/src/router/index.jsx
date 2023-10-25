import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../components/00-home";
import HelloWorld from "../components/01-hello-world/HelloWorld";
import Countries from "../components/02-jsx/Countries";



const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    },
    {
        path: "/hello-world",
        element: <HelloWorld/>
    },
    {
        path: "/countries",
        element: <Countries/>
    }
])



const AppRouterProvider = () => {
  return <RouterProvider router={router} />
}

export default AppRouterProvider