import React from 'react';

export const ItemCart = ({ item }) => {
    return (
        <div className='card mb-3 cardCart'>
                <div className="col-md-5">
                    <img src={item.image} className="img-fluid" alt={`Imagen de ${item.nombre}`} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Precio: ${item.price}</p>
                    <p className="card-text">Cantidad: {item.cant}</p>
                    <p className="card-text">Total: ${item.cant * item.price}</p>
                    <button className='btn btn-danger' onClick={() => console.log("asd")}>Eliminar del carrito</button>
                </div>
        </div>
    );
}