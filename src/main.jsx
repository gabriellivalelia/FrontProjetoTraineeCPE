import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cadastro from "./pages/Cadastro";
import Vitrine from "./pages/Vitrine";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import EditarPerfil from "./pages/EditarPerfil";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cadastro",
        element: <Cadastro />,
      },
      {
        path: "/Vitrine",
        element: <Vitrine />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Perfil",
        element: <Perfil />,
      },
      {
        path: "/EditarPerfil",
        element: <EditarPerfil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
