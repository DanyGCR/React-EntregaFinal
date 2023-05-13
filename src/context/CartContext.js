import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addItem = (item, quantity) => {
        
        const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
        
        if(!isInCart(item.id)){
            setCart((prev) => [...prev, { ...item, quantity}])
        } else {
            console.error("El producto ya está en el carrito")
            
            let updatedCart = [...cart];
            updatedCart[itemIndex].quantity += quantity;
            setCart(updatedCart);

        }
    };
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId) 
        setCart(cartUpdated);
    };
 
    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    };

    const totalQuantity = () => {
        let quantity = 0;
        cart.forEach((item) => quantity += item.quantity)
        return quantity;
    };

    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.precio * prod.quantity), 0);
      };
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, cartTotal }}>
            { children }
        </CartContext.Provider>
    );

};

export default CartContext;
