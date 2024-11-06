import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import AllProduct from "./components/AllProduct/AllProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import DashBord from "./components/DashBord/DashBord";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Statistic from "./components/Statistics/Statitics";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`/categories.json`),
        children: [
          {
            path: "/",
            element: <AllProduct />,
            loader: () => fetch(`/allProducts.json`),
          },
          {
            path: "/category/:category",
            element: <AllProduct />,
            loader: () => fetch(`/allProducts.json`),
          },
        ],
      },
      {
        path: "/product/:Id",
        element: <ProductDetails />,
        loader: () => fetch(`/allProducts.json`),
      },
      {
        path: "/dashBoard",
        element: <DashBord />,
        loader: () => fetch(`/allProducts.json`)
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
