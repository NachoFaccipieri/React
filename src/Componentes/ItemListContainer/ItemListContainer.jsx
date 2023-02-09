import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { consultarBDD } from '../../utils/funciones';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    console.log(idCategoria)

    const getLibro = () =>{
        consultarBDD('https://api.itbook.store/1.0/new').then(totalLibros => {
            setProductos(totalLibros.books)
        })
    }
    const getLibroByCat = (idCategoria) => {
        consultarBDD('https://api.itbook.store/1.0/new').then((totalLibros) => {
            const filtrados= totalLibros.books.filter(li => li.subtitle === idCategoria)
            setProductos(filtrados)
        })
    }

    useEffect(() => {

        if(idCategoria){
            getLibroByCat(idCategoria)
        } else {
            getLibro()
        }
}, [idCategoria])

return (
    <div className='row cardsLibro'>
        <ItemList totalLibros={productos} />
    </div>
);
}

