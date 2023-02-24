import React from 'react';
import { Link } from 'react-router-dom';

export const CartWidget = ({ cantidad }) => {
    return (
        <>
            <Link className='nav-link' to={"/cart"}><button className="btn btn-dark">Carrito</button></Link>
            <a className="nav-link px-2" href="./carrito.html"><i className="fa-solid fa-cart-shopping" /></a>
            <p>{cantidad}</p>
        </>
    );
}

