import styles from './Checkout.css'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { Timestamp, writeBatch } from 'firebase/firestore'
import { collection, addDoc, getDocs, query, where, documentId } from 'firebase/firestore'


import  db from "../../config/firebase/firebaseConfig"
import CheckoutForm from '../CheckoutForm/CheckoutForm'

import { PulseLoader } from "react-spinners"

const Checkout = () => {
    const [ loading, setLoading ] = useState(false);
    const [ orderId, setOrderId ] = useState('');

    const { cart, cartTotal, clearCart } = useContext( CartContext );

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try{
            const objOrder = {
                buyer:{
                    name, phone, email
                },
                items: cart,
                total: cartTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, 'products');

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }   

            });

            if(outOfStock.length === 0){
                await batch.commit();

                const orderRef = collection(db, 'orders');

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();

            } else {
                console.error('No Hay Stock de Productos Seleccionados');
            }

        } catch(error){
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return  <h1 className={styles.MensajePedido}>
                    <PulseLoader color="white" loading={loading} size={15} />
                    Su pedido esta siendo procesado
                </h1>
    }

    if(orderId) {
        return  <h1 className={styles.MensajePedido}>
                    Pedido realizado con exito. Su codigo de seguimiento es :
                    <span>
                        {orderId}
                    </span>
                </h1> 
    }


    return (
        <div className={styles.CheckoutContainer}>
            <h2 className={styles.CheckoutTitle}>
                Checkout
            </h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    ) 
}

export default Checkout;