import React from 'react';
import { Link } from 'react-router-dom';
export const Item = ({LIBRO}) => {
    return (
        <div id={LIBRO.isbn13} className="card cardLibro col-md-2 my-4 mx-3 p-3">
            <div className="img-wrapper">
                <img src={LIBRO.image} className="card-img-bottom" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{LIBRO.title}</h5>
                <p className="card-text">${LIBRO.price}</p>
                <Link className='nav-link' to={`/item/${LIBRO.id}`} ><button className='btn btnVerProducto'>Ver producto</button> </Link>
                <div>
                </div>
            </div>
        </div>
    );
}
