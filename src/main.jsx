import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/Navigation/About/About.jsx";
import DevServices from "./components/Navigation/DevServices/DevServices.jsx";
import Training from "./components/Navigation/Training/Training";
import Career from "./components/Navigation/Career/Career";
import Blogs from "./components/Navigation/Blogs/Blogs";
import Contact from "./components/Navigation/Contact/Contact";
import Login from "./components/Navigation/Login/Login";
import Security from "./components/Navigation/Security/Security";
import Home from "./components/Navigation/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "devservices",
        element: <DevServices />,
      },
      {
        path: "training",
        element: <Training />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "security",
        element: <Security />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
