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
        alert('Product added successfully');
    } else {
        alert('This product already exists');
    }
};
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
        alert('Wish list added successfully');
    }
};

export { addToStoredProductList, getStoredProductList, AddToStoredWishList, getStoredWishList};
