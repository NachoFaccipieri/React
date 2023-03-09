import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';

export const CartWidget = ({}) => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <Link className='nav-link' to={"/cart"}><button className="btn btn-outline-light btn-dark btnCart mx-3">Carrito</button>
            {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()} </span>}
            </Link>
           <i className="fa-solid fa-cart-shopping icono mx-1" />
        </>
    );
}

