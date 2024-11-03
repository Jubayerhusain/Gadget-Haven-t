import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import AllProduct from "./components/AllProduct/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: (
      <h1 className="text-5xl text-gray-700 font-bold text-center mt-40">
        Page 404 not Found{" "}
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`../categories.json`),
        children: [
          {
            path: "/",
            element: <AllProduct></AllProduct>,
            loader: () => fetch(`../allProducts.json`)
          },
          {
            path: "/allproduct",
            element: <AllProduct></AllProduct>,
            loader: () => fetch(`../allProducts.json`)
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
