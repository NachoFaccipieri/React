import React from 'react';
import { useState } from 'react';

export const ItemCount = ({ValInicial, stock, onAdd}) => {
    const [contador, setContador ] = useState(1) 


    const sumar = () => contador < stock && setContador(contador+1)
    const restar = () => contador > ValInicial && setContador(contador-1)

    return (
        <div>
            <button className='btn btn-outline-warning' onClick={()=> restar()}>-</button>
            {contador}
            <button className='btn btn-outline-success' onClick={()=> sumar()}>+</button>
            <button className='btn btn-light' onClick={ () => onAdd(contador)}>Agregar al carrito</button>
        </div>
    );
}