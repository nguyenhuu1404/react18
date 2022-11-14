import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../error-page'
import App from '../App'
import User from "../components/users/User"
import Admin from "../components/admins/Admin"
import HomePage from "../components/home/HomePage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/users",
        element: <User />,
      },  
    ],
  },
  {
    path: "/admins",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/admins/users",
        element: <User />,
      },  
    ],
  },
]);
