import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext';
export const ItemCart = ({ item }) => {
    const {removeItem} = useCarritoContext();
    return (
        <div className='card cardCart'>
                <div className="col-md-5">
                    <img src={item.image} className="img-fluid" alt={`Imagen de ${item.nombre}`} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text priceCart">Precio: ${item.price}</p>
                    <p className="card-text">Cantidad: {item.cant}</p>
                    <p className="card-text totalPrice">Total: $ {(item.cant * item.price).toFixed(2)}</p>
                    <button className="btn btn-warning" onClick={() => removeItem(item.id)}>Eliminar del carrito</button>
                </div>
        </div>
    );
}