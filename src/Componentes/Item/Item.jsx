import React from 'react';
import { Link } from 'react-router-dom';
export const Item = ({LIBRO}) => {
    return (
        <div id={LIBRO.isbn13} className="card cardLibro col-md-2 m-2 p-2">
            <div className="img-wrapper">
                <img src={LIBRO.image} className="card-img-bottom" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{LIBRO.title}</h5>
                <p className="card-text">{LIBRO.price}</p>
                <Link className='nav-link' to={`/item/${LIBRO.isbn13}`} ><button className='btn btn-outline-info'>Ver producto</button> </Link>
                <div>
                </div>
            </div>
        </div>
    );
}
