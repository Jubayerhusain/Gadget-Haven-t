import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navber from "./../Header/Navber";
import Footer from "./../Footer/Footer";
import { Toaster } from "react-hot-toast";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = "BD-TECT_GADGET";
    if (path === "/") {
      title = "Home";
    } else if (path.includes("/product/")) {
      title = "Product Details";
    } else if (path === "/dashboard") {
      title = "Dashboard";
    } else if (path === "/aboutUs") {
      title = "About Us";
    } else if (path === "/statistic") {
      title = "Statistics";
    } else if (path.startsWith("/category")) {
      title = "Category";
    }

    document.title = "BD-TECT_GADGET || " + title;
  }, [location]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <Toaster />
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
