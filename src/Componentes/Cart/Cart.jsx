import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';

export const Cart = () => {

    const carrito = [
        {
            "title": "Data Visualization with Python and JavaScript, 2nd Edition",
            "subtitle": "Scrape, Clean, Explore, and Transform Your Data",
            "cant": 4,
            "category": {
                "id": 1,
                "nombre": "data"
            },
            "isbn13": "9781098111878",
            "price": "$60.99",
            "image": "https://itbook.store/img/books/9781098111878.png",
            "url": "https://itbook.store/books/9781098111878"
        },
        {
            "title": "Learning Microsoft Power BI",
            "subtitle": "Transforming Data into Insights",
            "cant": 2,
            "category": {
                "id": 2,
                "nombre": "machine lerning"
            },
            "isbn13": "9781098112844",
            "price": "$36.99",
            "image": "https://itbook.store/img/books/9781098112844.png",
            "url": "https://itbook.store/books/9781098112844"
        },
    ]

    return (
        <>
            {
                //Rendering condicional. Evaluo si el carrito está vacio
                carrito.length === 0
                    ?
                    //Si la condición da verdad ==> el carrito está vacío
                    <>
                        <h2>No hay productos en el carrito</h2>
                        <Link className='nav-link' to={"/"}> <button className='btn btn-primary'>Continuar comprando</button></Link>
                    </>
                    :
                    <div className='container cartContainer'>
                        <ItemList totalLibros={carrito} plantilla="itemCart"/>
                    </div>
            }
        </>
    )

}


