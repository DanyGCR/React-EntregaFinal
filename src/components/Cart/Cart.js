import styles from './Cart.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, cartTotal } = useContext(CartContext);
    
    if(totalQuantity() === 0 ) {
        return (
            <div className={styles.Cart}>
                <h2 className={styles.Title}>No hay nada en tu carrito</h2>
                <Link to={`/`} className={styles.Option}>Volver a los productos</Link>
            </div>
        )
    }

    return (
        <div className={styles.Cart}>
            { cart.map(p => <CartItem key={p.id} {...p} />)}
            <p className={styles.Total}>
                Total: ARS {cartTotal().toFixed(2)}
            </p>
            <button onClick={() => clearCart()} className={styles.Option}>
                Vaciar carrito
            </button>
            <Link to={`/checkout`} className={styles.Option}>
                Checkout
            </Link>
        </div>
    )
}

export default Cart;