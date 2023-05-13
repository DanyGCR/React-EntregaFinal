import  db from "./../config/firebase/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore";

const getProducts = async (categoryId) => {
    let products = [];
    const collectionRef = categoryId
        ? query(collection(db, 'productos'), where('categoria', '==', categoryId))
        : collection(db, 'productos')

    const response = await getDocs(collectionRef);
    products = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data }
    })
    return products;
}

export default getProducts;