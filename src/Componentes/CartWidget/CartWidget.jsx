import React from 'react';

export const CartWidget = ({ cantidad }) => {
    return (
        <>
            <a className="nav-link px-2" href="./carrito.html"><i className="fa-solid fa-cart-shopping" /></a>
            <p>{cantidad}</p>
        </>
    );
}

