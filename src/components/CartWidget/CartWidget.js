import styles from './CartWidget.css'

import { FiShoppingCart } from "react-icons/fi"

import { useContext } from "react"

import CartContext from "../../context/CartContext"

import { Link } from "react-router-dom"


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to={`/cart`}>
            <div className={styles.CartWidget}>
                <FiShoppingCart className={styles.iconCarrito} alt='cart-widget' />
                <p className={styles.totalQuantity}>{totalQuantity()}</p>
            </div>
        </Link>
    );
};
export default CartWidget;