import React from 'react';

export const ItemCart = ({ item }) => {
    return (
        <div className='card mb-3 cardCart'>
            <div className="img-wrapper">
                <img src={item.image} className="card-img-bottom img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="card-body">.
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Precio: {item.price}</p>
                <p className="card-text">Cantidad: {item.cant}</p>
                <p className="card-text">Total: {item.price * item.cant}</p>
                <button className='btn btn-danger' onClick={() => console.log("asd")}>Eliminar del carrito</button>
            </div>
        </div>
    );
}