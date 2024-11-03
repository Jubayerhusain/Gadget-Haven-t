/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

function Categories({ categories }) {
  console.log(categories.category);
  return (
    <div>
      <ul className="space-x-4 flex-col border-2 rounded-xl p-5">
        <NavLink to="/category"
        className={({ isActive }) =>
            `text-xl ${isActive ? "text-red-500" : ""}`
          }
        >

          <p className="border-2 rounded-3xl text-center py-2 px-3">
            All Product
          </p>
        </NavLink>
        {categories.map((category) => (
          <NavLink
            to={`/category`}
            key={category.category}
            className={({ isActive }) =>
              `text-xl ${isActive ? "text-red-500" : ""}`
            }
          >
            <p className="border-2 rounded-3xl text-center py-2 px-3">
              {category.category}
            </p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
