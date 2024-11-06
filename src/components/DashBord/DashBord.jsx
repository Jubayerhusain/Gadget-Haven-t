/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  getStoredProductList,
  getStoredWishList,
  removeCartFromPRoductList,
  removeCartFromWishList,
} from "../../utilitis/localStorage";
import modalimage from "./../../assets/Group.png";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

function Dashboard() {
  const allProducts = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartView, setIsCartView] = useState(true);

  useEffect(() => {
    const storedProductList = getStoredProductList();
    const storedProductListInt = storedProductList.map((id) => parseInt(id));

    const productListFilter = allProducts.filter((product) =>
      storedProductListInt.includes(product.id)
    );
    setCartList(productListFilter);

    const storedWishlist = getStoredWishList();
    const storedWishlistInt = storedWishlist.map((id) => parseInt(id));

    const wishlistFilter = allProducts.filter((product) =>
      storedWishlistInt.includes(product.id)
    );
    setWishlist(wishlistFilter);

    if (productListFilter.length > 0) {
      setCurrentList(productListFilter);
      const priceSum = productListFilter.reduce(
        (total, product) => total + product.price,
        0
      );
      setTotalPrice(priceSum);
    } else {
      setCurrentList(wishlistFilter);
      setTotalPrice(0);
    }
  }, [allProducts]);

  const showCart = () => {
    setIsCartView(true);
    setCurrentList(cartList);
    const priceSum = cartList.reduce(
      (total, product) => total + product.price,
      0
    );
    setTotalPrice(priceSum);
  };

  const showWishlist = () => {
    setIsCartView(false);
    setCurrentList(wishlist);
    setTotalPrice(0);
  };

  const sortByPrice = () => {
    const sortedList = [...currentList].sort((a, b) => b.price - a.price);
    setCurrentList(sortedList);
  };

  const deleteItem = (itemId) => {
    if (isCartView) {
      const updatedCartList = cartList.filter((item) => item.id !== itemId);
      setCartList(updatedCartList);
      setCurrentList(updatedCartList);
      removeCartFromPRoductList(itemId);
      const priceSum = updatedCartList.reduce(
        (total, product) => total + product.price,
        0
      );
      setTotalPrice(priceSum);
      toast.error("Remove Done");
    } else {
      const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
      setWishlist(updatedWishlist);
      setCurrentList(updatedWishlist);
      removeCartFromWishList(itemId);
      toast.error("Remove Done");
    }
  };
  // const handleModalClose = () => {
  //   setCartList([]); 
  //   setCurrentList([]); 
  //   setTotalPrice(0);
  // };
 const navigate =  useNavigate();
  const handleModalClose = () => {
    cartList.forEach((item) => removeCartFromPRoductList(item.id));
    setCartList([]); 
    setCurrentList([]); 
    setTotalPrice(0);
    navigate("/");
  };

  return (
    <div className="min-h-[500px]">
      <div className="bg-[#9538E2] min-h-400px py-12">
        <h1 className="text-center font-bold text-5xl text-white my-4">
          Dashboard
        </h1>
        <p className="text-center w-5/12 mx-auto text-lg font-normal text-gray-100">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex space-x-4 justify-center my-12">
          <button
            className="btn rounded-xl text-lg bg-white text-purple-500 border-2 border-purple-500 hover:border-white hover:bg-purple-500 hover:text-white"
            onClick={showCart}
          >
            Cart
          </button>
          <button
            className="btn rounded-xl text-lg bg-white text-purple-500 border-2 border-purple-500 hover:border-white hover:bg-purple-500 hover:text-white"
            onClick={showWishlist}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div>
        {isCartView ? (
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-700">Cart</h1>
            <div className="text-center my-4 flex justify-end space-x-3 items-center">
              <p className="text-xl font-bold text-gray-700">
                Total Price: ${totalPrice}
              </p>
              <button
                className="btn rounded-xl text-lg bg-white text-purple-500 border-2 border-purple-500 hover:border-white hover:bg-purple-500 hover:text-white"
                onClick={sortByPrice}
              >
                Sort by Price
              </button>
              <button
                className="btn rounded-xl text-lg bg-white text-purple-500 border-2 border-purple-500 hover:border-white hover:bg-purple-500 hover:text-white"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Purchase
              </button>
            </div>
          </div>
        ) : (
          <h1 className="text-xl font-bold text-gray-700 my-6">Wishlist</h1>
        )}

        {currentList.length > 0 ? (
          currentList.map((item) => (
            <div
              key={item.id}
              className="border rounded-3xl p-2 my-10 shadow-md"
            >
              <div>
                <div className="border-2 rounded-2xl p-5 flex justify-between items-center space-x-4 bg-purple-200">
                  <div className="flex space-x-4">
                    <img
                      className="w-44 h-44 rounded-md"
                      src={item.img}
                      alt=""
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-700">
                        {item.brand}
                      </h2>
                      <p className="text-lg font-semibold text-gray-600">
                        {item.description}
                      </p>
                      <p className="font-semibold text-gray-600">
                        Model: {item.model}
                      </p>
                      <p className="font-semibold text-gray-600">
                        Price: ${item.price}
                      </p>
                      <div className="flex space-x-3 items-center">
                        <div className="rating">
                          <input
                            type="radio"
                            name={`rating-${item.id}`}
                            className="mask mask-star-2 bg-purple-500"
                          />
                          <input
                            type="radio"
                            name={`rating-${item.id}`}
                            className="mask mask-star-2 bg-purple-500"
                          />
                          <input
                            type="radio"
                            name={`rating-${item.id}`}
                            className="mask mask-star-2 bg-purple-500"
                          />
                          <input
                            type="radio"
                            name={`rating-${item.id}`}
                            className="mask mask-star-2 bg-purple-500"
                            defaultChecked
                          />
                          <input
                            type="radio"
                            name={`rating-${item.id}`}
                            className="mask mask-star-2 bg-purple-500"
                          />
                        </div>
                        <p className="bg-gray-100 rounded-full inline-block px-4 py-2 border-2 border-white">
                          {item.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="mt-4 btn rounded-2xl text-lg bg-red-500 text-white hover:bg-red-500"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No items in the selected list.
          </p>
        )}
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-center my-2">
            <img src={modalimage} alt="" />
          </div>
          <h3 className="font-bold text-2xl text-center">Total Price</h3>
          <p className="py-2 text-center text-lg">
            Your total price is: ${totalPrice}
          </p>
          <p className="text-center text-md font-semibold">
            Thanks for purchasing.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn bg-purple-500 text-gray-100 hover:bg-purple-800"
                onClick={() => handleModalClose()}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Dashboard;
