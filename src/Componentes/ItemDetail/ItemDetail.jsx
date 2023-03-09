import React from 'react';

import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
import { toast, Flip } from 'react-toastify';


export const ItemDetail = ({ LIBRO }) => {

    const {addItem} = useCarritoContext()
    
    const onAdd = (cantidad) => {
        addItem(LIBRO,cantidad)
        toast.success('📚 Libro agregado al carrito!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            transition: Flip,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
    }

    return (
        <div className="cardDetail row g-0">
            <div className="col-md-3">
                <img src={LIBRO.image} className="card-img-bottom" alt="..." />
            </div>

            <div className="card-body col-md-7">
                <h1 className="card-title fw-bold">{LIBRO.title}</h1>
                <h4 className='my-3'>{LIBRO.subtitle}</h4>
                <h5>Para más info: <a target="_blank" href={LIBRO.url}>{LIBRO.url}</a> </h5>
                <p className="card-text priceDetail my-4">Price: ${LIBRO.price}</p>
                <h4 className="card-text">Stock: {LIBRO.stock}</h4>
                <ItemCount ValInicial={1} stock={LIBRO.stock} onAdd={onAdd}/>
                <Link className='nav-link' to={'/Cart'}><button className='btn btn-dark mt-2'>Finalizar compra</button> </Link>
                
                
            </div>

        </div>
    );
}
