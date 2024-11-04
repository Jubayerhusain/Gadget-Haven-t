/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function ProductCart({ product }) {
  // console.log(product);
  const {id, brand, model, img, price } = product;

  return (
    <div>
      <div className="card bg-base-100 w-96 mx-auto shadow-xl">
        <figure className="bg-purple-200 p-5">
          <img className="w-48 h-52 rounded-lg " src={img} alt={brand} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {brand}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-semibold text-gray-600">Model: {model}</p>
          <p className="font-semibold text-gray-600">Price: ${price}</p>
          <div className="card-actions justify-start">
            <div>
              <Link to={`/product/${id}`}>
                <button className="border-2 rounded-3xl py-2 px-4 border-purple-700 text-purple-700">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
