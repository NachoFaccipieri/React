import React from 'react';
import { Link } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';

export const Cart = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()

    return (
        <>
            {
                //Rendering condicional. Evaluo si el carrito está vacio
                carrito.length === 0
                    ?
                    //Si la condición da verdad ==> el carrito está vacío
                    <>
                        <h2 className='text-center m-5 bg-gradient'>No hay productos en el carrito</h2>
                        <Link className='nav-link text-center' to={"/"}> <button className='btn btn-primary w-50 m-5'>Continuar comprando</button></Link>
                    </>
                    :
                    <div className='container cartContainer row'>
                        <ItemList totalLibros={carrito} plantilla="itemCart" />
                        <p className='resumen'>Resumen de la compra: ${totalPrice().toFixed(2)}</p>
                        <div className="divButtons justify-content-between">
                            
                            <button className='btn btn-danger my-2' onClick={() => {emptyCart(true)}}>Vaciar Carrito</button>
                            <Link className="nav-link my-2 " to={"/checkout"}><button className="btn btn-dark btnFinalizar">Finalizar Compra</button></Link>
                            <Link className="nav-link" to={"/"}><button className="btn btn-danger my-2 btnContinuar">Continuar comprando</button></Link>
                          
                        </div>
                    </div>
            }
        </>
    )

}


