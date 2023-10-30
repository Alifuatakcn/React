import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import CounterPage from "../pages/counter-page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path:"counter",
                element: <CounterPage/>
            }
        ]
    }
])

const AppRouterProvider = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouterProvider
