import styles from './CartItem.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { TiDelete } from 'react-icons/ti';

const CartItem = ({ id, nombre, imgURL, quantity, precio }) => { 
  const { removeItem } = useContext( CartContext ); 
  const total = precio * quantity;

  console.log(quantity);
  
  return (
    <div className={styles.CartItem}>
      <div className={styles.CartItemInfo}>
        <div className={styles.CartItemDetail} >
          
          <picture>
                <img src={imgURL} alt={nombre} className={styles.imgMini} />
          </picture>         
          
          <h3 className={styles.Title1}>
            {nombre}
          </h3>

          <p className={styles.Info}>
            Cantidad: {quantity}
          </p>

          <p className={styles.Info}>
            Precio: ARS {precio}
          </p>

          <p className={styles.Info}>
            Subtotal: ARS {total.toFixed(2)}
          </p>

        </div>
      </div>
      <div className={styles.ItemAction}>
        <button className={styles.Button} onClick={() => removeItem(id)}>
          <TiDelete className={styles.DeleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;