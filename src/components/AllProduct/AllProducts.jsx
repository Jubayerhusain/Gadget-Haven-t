import { useLoaderData } from "react-router-dom"
import ProductCart from "../ProductCart/ProductCart";

function AllProduct() {
    const allProduct = useLoaderData();
    console.log(allProduct);
    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
            {
                allProduct.map((product, idx) => <ProductCart key={idx} product={product} />)
            }
            </div>
        </div>
    )
}

export default AllProduct
