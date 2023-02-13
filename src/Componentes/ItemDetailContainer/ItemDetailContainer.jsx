import React from 'react';

import { consultarBDD } from '../../utils/funciones';
import { ItemDetail } from '../ItemDetail/ItemDetail';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()

    const getLibro = (id) => {
        consultarBDD('../json/libros.json').then((totalLibros) => {
            const filtrados= totalLibros.find(li => li.isbn13 === id)
            setProducto(filtrados)
        })
    }

    useEffect(() => {
        getLibro(id)
    }, [])

    return (
        <div className='mb-3 cardsDetail'>
            <ItemDetail LIBRO={producto}/>
        </div>
    );
}
