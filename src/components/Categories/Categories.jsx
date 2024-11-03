/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

function Categories({ categories }) {
//   console.log(categories);
  return (
    <div>
      <ul className="space-y-5 border-2 rounded-xl p-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xl border-2 rounded-3xl text-center py-2 px-3 block ${
                isActive
                  ? "text-white bg-purple-700"
                  : "text-gray-800 bg-gray-200"
              }`
            }
          >
            All Product
          </NavLink>
        </li>
        {categories.map((category) => (
          <li className="w-full" key={category.category}>
            <NavLink
              to={`/category`}
              className={({ isActive }) =>
                `text-xl border-2 rounded-3xl text-center py-2 px-3 block ${
                  isActive
                    ? "text-white bg-purple-700"
                    : "text-gray-800 bg-gray-200"
                }`
              }
            >
              {category.category}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
