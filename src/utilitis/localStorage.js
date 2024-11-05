import toast from "react-hot-toast";

// get the item from localStorage 
const getStoredProductList = () => {
    const getProductList = localStorage.getItem('product-list');
    if (getProductList) {
        return JSON.parse(getProductList);
    }
    return [];
}

// set the item to product list 
const addToStoredProductList = (id) => {
    console.log(id);
    const storedProductList = getStoredProductList();
    
    if (!storedProductList.includes(id)) {
        storedProductList.push(id);
        localStorage.setItem('product-list', JSON.stringify(storedProductList));
        // alert();
        toast.success('Product added successfully')
    } else {
        toast.error("This product already exist")
    }
};
// remove the cart from cart list..
const removeCartFromPRoductList = (id) =>{
    const storedProductList = getStoredProductList();
    const updatePRoductList = storedProductList.filter(cartId=> cartId !==id)
    localStorage.setItem('product-list', JSON.stringify(updatePRoductList));
}
// get the item from localStorage 
const getStoredWishList = () => {
    const getWishList = localStorage.getItem('wish-list');
    if (getWishList) {
        return JSON.parse(getWishList);
    }
    return [];
}

// set the item to product list
const AddToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    
    if (!storedWishList.includes(id)) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        // alert();
        toast.success('Wish list added successfully')
    }
    else {
        toast.error("This product already exist")
    }
};
// remove the cart from wish list..
const removeCartFromWishList = (id) =>{
    const storedStoredWishList = getStoredWishList();
    const updateWishList = storedStoredWishList.filter(wishId=> wishId !==id)
    localStorage.setItem('wish-list', JSON.stringify(updateWishList));
}
export { addToStoredProductList, getStoredProductList, removeCartFromPRoductList, AddToStoredWishList, getStoredWishList, removeCartFromWishList};
