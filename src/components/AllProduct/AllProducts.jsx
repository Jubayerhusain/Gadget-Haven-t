import { useLoaderData, useParams } from "react-router-dom";
import ProductCart from "../ProductCart/ProductCart";
import { useEffect, useState } from "react";
function AllProduct() {
  const allProduct = useLoaderData();
  const { category } = useParams();
//   console.log("Product Category:", category);

  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const productFilter = [...allProduct].filter(
        (product) => product.category === category
      );
      setCartProducts(productFilter);
    } else {
      setCartProducts(allProduct.slice(0, 9));
    }
  }, [allProduct, category]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {cartProducts.map((product, idx) => (
          <ProductCart key={idx} product={product} />
        ))}
      </div>

        <button
          onClick={() => {
            setCartProducts(allProduct);
          }}
          className="btn badge-secondary my-10"
        >
          All Product
        </button>

    </div>
  );
}

export default AllProduct;
