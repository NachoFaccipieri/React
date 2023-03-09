import { useContext, createContext, useState } from "react";
import Swal from 'sweetalert2'
const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    //Verifico si existe produco en el carrito
    const isInCart = (id) => {
        //Verifico que exista el producto y me lo traigo 
        return carrito.find(prod => prod.id === id)
    }


    //Elimino elem. del carrito
    const removeItem = (id) => {

        //Forma de eliminar un elemento
        // const indice = carrito.findIndex(prod => prod.id === id )
        // carrito.splice(indice, 1)

        //Otra forma de eliminar un elemento. Me traigo todos los elementos menos el que del ID que quiero eliminar
        setCarrito(carrito.filter(prod => prod.id !== id))
    }



    //Vacío el carrito
    const emptyCart = (aux) => {
        if (aux) {
            Swal.fire({
                title: 'Desea vaciar el carrito?',
                showDenyButton: true,
                confirmButtonText: 'Vaciar carrito',
                denyButtonText: `Cancelar`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    setCarrito([])
                  Swal.fire('Carrito vaciado con éxito', '', 'info')
                } else if (result.isDenied) {
                }
              })
        } else {
            setCarrito([])
        }
        
        
    }


    // Cantidad de objetos en el carrito
    const getItemQuantity = () => {

        //Me devuelve la cantidad de productos DISTINTOS que hay en el carrito. No la cantidad total de productos. 3 remeras y 2 bufandas => carrito = 2
        //return carrito.length

        //Devuelve la cantidad de productos en el carrito, sin importar si tengo 3 del mismo, los suma igual. 3 remeras y 2 bufandas => carrito = 5
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }



    //Precio total de la compra

    //REVISAR TOTAL PRICE
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.price), 0)
    }


    //Agregar producto al carrito


    const addItem = (producto, cantidad) => {
        //Si existe el producto en el carrito, lo modifico
        if (isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else {
            //Si no existe en el carrito, lo creo
            const prodCart = {
                ...producto,
                cant: cantidad
            }

            //Para utilizar el PUSH para agregar el elemento al carrito deberíamos:
            /*
                const aux = [...carrito]
                aux.push(prodCart)
                setCarrito(aux)
            */

            setCarrito([...carrito, prodCart])
        }
    }

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
        
    )

}