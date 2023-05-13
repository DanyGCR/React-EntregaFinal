import styles from './ItemList.css'
import Item from "../Item/Item"


const ItemList = ({ products }) => {

    return(
        
        <div className={styles.ListGroup}>
            {products.map(prod => <Item Key={prod.id} {...prod} />)}
        </div>
       
    )
       
} 



export default ItemList;