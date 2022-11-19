import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../error-page'
import App from '../App'
import User from "../components/users/User"
import Admin from "../components/admins/Admin"
import HomePage from "../components/home/HomePage";
import Index from "../components/admins/users/Index";
import Dashboard from "../components/admins/Dashboard";
import AdminError from "../components/admins/errors/AdminError";

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
    path: "/admin",
    element: <Admin />,
    errorElement: <AdminError />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "/admin/users",
        element: <Index />,
      },  
    ],
  },
]);
