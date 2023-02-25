import React from 'react';

import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export const ItemDetail = ({ LIBRO }) => {

    const onAdd = (cantidad) => {

    }

    return (
        <div id={LIBRO.isbn13} className="card cardDetail">

            <div className="img-wrapper">
                <img src={LIBRO.image} className="card-img-bottom" alt="..." />
            </div>

            <div className="card-body">
                <h1 className="card-title fw-bold">{LIBRO.title}</h1>
                <h3 className=' bd-highlight '>{LIBRO.subtitle}</h3>
                <h5>URL: <a href={LIBRO.url}>{LIBRO.url}</a> </h5>
                <p className="card-text priceDetail">Price: ${LIBRO.price}</p>
                <ItemCount ValInicial={1} stock={15} onAdd={onAdd}/>
                <Link className='nav-link' to={'/Cart'}><button className='btn btn-dark'>Finalizar compra</button> </Link>
            </div>

        </div>
    );
}
