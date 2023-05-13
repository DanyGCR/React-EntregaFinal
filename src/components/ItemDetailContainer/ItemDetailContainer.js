import styles from './ItemDetailContainer.css'
import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import db from "../../config/firebase/firebaseConfig";

import { PulseLoader } from "react-spinners";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'productos', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId]);


    return (
        <div className={styles.ItemDetailContainer}>
            {loading ? (
                <PulseLoader color="white" loading={loading} size={15} />
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );
}

export default ItemDetailContainer;