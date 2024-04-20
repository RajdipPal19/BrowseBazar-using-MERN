import React, { createContext, useState } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index <= all_products.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItem] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += (itemInfo.new_price*70) * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalItemsInCart = () => {
        let ans = 0;
        for (let i in cartItems) {
            if (cartItems[i] > 0) {
                ans += cartItems[i];
            }
        }
        return ans;
    }
    const contextValue = { getTotalItemsInCart, getTotalAmount, all_products, cartItems, addToCart, removeToCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
