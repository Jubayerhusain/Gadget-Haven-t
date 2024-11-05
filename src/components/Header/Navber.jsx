import { NavLink, useLocation } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { getStoredProductList, getStoredWishList } from "../../utilitis/localStorage";
import { useState, useEffect } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const { pathname } = useLocation();

  useEffect(() => {
    const storedProductList = getStoredProductList();
    const storedWishList = getStoredWishList();

    setCartCount(storedProductList.length);
    setWishlistCount(storedWishList.length);
  }, []);

  const isDashboard = pathname === "/dashboard";
  const isStatistics = pathname === "/Statistics";
  const isAboutUs = pathname === "/aboutUs";

  const navbarClass = 
  isDashboard? "navbar bg-white py-4 px-14 text-gray-700 rounded-t-2xl sticky top-0 z-50 backdrop-blur-lg":
  isStatistics? "navbar bg-gray-800 py-4 px-14 text-white rounded-t-2xl sticky top-0 z-50 backdrop-blur-lg":
  isAboutUs? "navbar bg-white py-4 px-14 text-gray-700 rounded-t-2xl sticky top-0 z-50 backdrop-blur-lg":
  "navbar bg-[#9538E2] py-4 px-14 text-white rounded-t-2xl sticky top-0 z-50 backdrop-blur-lg";

  const getLinkClass = (isActive) => {
    if (isActive) return "font-bold underline";
    if (isDashboard) return "text-gray-700";
    if (isStatistics) return "text-white";
    if (isAboutUs) return "text-gray-700";
    return "text-white";
  };

  const Link = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/Statistics" className={({ isActive }) => getLinkClass(isActive)}>
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={({ isActive }) => getLinkClass(isActive)}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className={({ isActive }) => getLinkClass(isActive)}>
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={navbarClass}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
          >
            {Link}
          </ul>
        </div>
        <a className="font-bold text-3xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{Link}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-3">
          <div className="relative p-3 text-md rounded-full bg-gray-700 text-white">
            <PiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute top-[-2px] right-[-8px] text-white rounded-full bg-purple-700 border-2 border-white text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <div className="relative p-3 text-md rounded-full bg-gray-700 text-white">
            <FaRegHeart />
            {wishlistCount > 0 && (
              <span className="absolute text-white top-[-2px] right-[-8px] rounded-full bg-purple-700 border-2 border-white text-xs w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
