import styles from './ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ItemList from "../ItemList/ItemList"

import { getDocs, collection, query, where } from "firebase/firestore"
import db from "../../config/firebase/firebaseConfig"
import { PulseLoader } from "react-spinners"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('categoria', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className={styles.ItemList}>
            {loading ? (
                <PulseLoader color="red" loading={loading} size={15} />
            ) : (
                <>
                    <h1 className={styles.TituloListContainer}>{greeting}</h1>
                    <ItemList products={products} />
                </>
            )}
        </div>
    )
}

export default ItemListContainer;