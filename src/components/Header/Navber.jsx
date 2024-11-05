import { NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { getStoredProductList, getStoredWishList } from "../../utilitis/localStorage";
import { useState, useEffect } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const storedProductList = getStoredProductList();
    const storedWishList = getStoredWishList();

    setCartCount(storedProductList.length);
    setWishlistCount(storedWishList.length);
  }, []);

  const Link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-bold underline" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Statistics"
          className={({ isActive }) =>
            isActive ? "text-white font-bold underline" : "text-white"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-white font-bold underline" : "text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/topSell"
          className={({ isActive }) =>
            isActive ? "text-white font-bold underline" : "text-white"
          }
        >
          Top Sell
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#9538E2] py-4 px-14 rounded-t-2xl sticky top-0 z-50 backdrop-blur-lg">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
          >
            {Link}
          </ul>
        </div>
        <a className="font-bold text-white text-3xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{Link}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-3">
          <div className="relative p-3 text-md rounded-full bg-white">
            <PiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute top-[-2px] right-[-8px] rounded-full bg-purple-700 border-2 border-white text-white text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <div className="relative p-3 text-md rounded-full bg-white">
            <FaRegHeart />
            {wishlistCount > 0 && (
              <span className="absolute top-[-2px] right-[-8px] rounded-full bg-purple-700 border-2 border-white text-white text-xs w-5 h-5 flex items-center justify-center">
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
