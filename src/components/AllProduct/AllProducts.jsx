import { useLoaderData } from "react-router-dom"
import ProductCart from "../ProductCart/ProductCart";
import { useEffect, useState } from "react";

function AllProduct() {
    const allProduct = useLoaderData();
    console.log(allProduct);
    const [cartProducts ,setCartProducts] = useState([])
    useEffect(()=>{
        if(allProduct){
            setCartProducts(allProduct.slice(0,9))
        }
    },[allProduct])

    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
            {
                cartProducts.map((product, idx) => <ProductCart key={idx} product={product} />)
            }
            </div>
            <button onClick={()=>{setCartProducts(allProduct)}} className="btn badge-secondary my-10">See More</button>
        </div>
    )
}

export default AllProduct
