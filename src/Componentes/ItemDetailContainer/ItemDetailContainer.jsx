import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProducto } from '../../utils/firebase';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState([])


    // const getLibro = (id) => {
    //     getProducto(id).then((totalLibros) => {
    //         setProducto(totalLibros)
    //     })
    // }

    useEffect(() => {
        
        getProducto(id).then(prod => {
            
            setProducto(prod);
        })
        // getLibro(id)
    }, [])

    return (
        <div className='mb-3 cardsDetail'>
            <ItemDetail LIBRO={producto} />
        </div>
    );
}
