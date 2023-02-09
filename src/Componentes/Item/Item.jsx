import React from 'react';

export const Item = ({LIBRO}) => {
    return (
        <div id="${LIBRO.isbn13}" className="card col-md-2 m-1 p-1">
            <div className="img-wrapper">
                <img src={LIBRO.image} className="card-img-bottom" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{LIBRO.title}</h5>
                <p className="card-text">{LIBRO.price}</p>
                <a id="btn${LIBRO.isbn13}" className="btn btn-primary">Ver producto</a>
                <div>
                </div>
            </div>
        </div>
    );
}
