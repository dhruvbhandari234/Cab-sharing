import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/inter";
import { Login } from "./Login/Login";
import { SignUp } from "./Login/SignUp/SignUp";
import { Root } from "./Home/Root";
import { MyRides } from "./Home/MyRides/MyRides";
import { SearchRides } from "./Home/SearchRides/SearchRides";

export const axiosApi = axios.create({ baseURL: "http://127.0.0.1:8080" });

export const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <SignUp />,
    path: "/register",
  },
  {
    element: <Root />,
    children: [
      { element: <MyRides />, path: "/home" },
      {
        element: <SearchRides />,
        path: "/search",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
