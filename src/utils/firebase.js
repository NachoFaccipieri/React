
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-coder-e9473.firebaseapp.com",
    projectId: "react-coder-e9473",
    storageBucket: "react-coder-e9473.appspot.com",
    messagingSenderId: "1008583697493",
    appId: "1:1008583697493:web:0632cb37a8b4571a81e0dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() //Ref. a la  BD

/*
    CRUD => Create Read Update Delete
    CRUD productos
*/

export const cargarBDD = async () => {
    const promise = await fetch('./json/libros.json')
    const productos = await promise.json();
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {  //collections si existe prodcutos (mi coleccion), lo lee/consulta. Sino lo crea y consulta
            title: prod.title,
            subtitle: prod.subtitle,
            idCat: prod.idCat,
            nombre: prod.nombre,
            price: prod.price,
            image: prod.image,
            url: prod.url
        })
    })
}

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)

}

export const deleteProducto = async (id, info) => {
    await deleteDoc(doc(db, "productos", id), info)
}



//Create & Read => orden de compras

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}


export const getOrdenCompra = async (id) => {
    const oC = await getDoc(doc(db, "ordenesCompra", id))
    const ordenCompra = {...oC.data(), id: oC.id}
    return ordenCompra
}