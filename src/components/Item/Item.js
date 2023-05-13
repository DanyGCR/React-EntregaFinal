import styles from './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, nombre, imgURL, precio}) => {
    return (
        <article className={styles.CardItem}>
            
            <header className={styles.ItemHeader}>
                <h2 className={styles.ItemHeaderTitle}>
                    {nombre}
                </h2>
            </header>
  
            <picture className={styles.imgProductos}>
                <img src={imgURL} alt={nombre} className={styles.ItemImg} />
            </picture>
  
            <section>
                <p className={styles.ItemInfo}>
                   Precio: ARS {precio}
                </p>
            </section>
  
            <footer className={styles.ItemFooter}>
                <Link to={`/item/${id}`} className={styles.buttonDetail}>
                    Ver detalle completo
                </Link>
            </footer>

        </article>
    )
}

export default Item