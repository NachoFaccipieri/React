import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const ItemCount = ({ValInicial, stock, onAdd}) => {
    const [contador, setContador ] = useState(1) 


    const sumar = () => contador < stock && setContador(contador+1)
    const restar = () => contador > ValInicial && setContador(contador-1)


    return (
        <div>
            <button className='btn btn-outline-warning m-2' onClick={()=> restar()}>-</button>
            {contador}
            <button className='btn btn-outline-success m-2' onClick={()=> sumar()}>+</button>

            
            <Link className='nav-link' to={'/'}><button className='btn btn-toolbar btn-outline-primary mt-2' onClick={ () => onAdd(contador)}>Agregar al carrito</button></Link>
            
        </div>
    );
}