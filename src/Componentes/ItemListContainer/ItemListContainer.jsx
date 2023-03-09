import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


import { getProductos } from '../../utils/firebase';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {

    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (idCategoria) {
            getProductos().then(libros => {
                const totalLibros = libros.filter(prod => prod.stock > 0).filter(prod => prod.nombre === (idCategoria))
                const items = <ItemList totalLibros={totalLibros} plantilla="Item" />
                setProductos(items)
            })
        } else {
            getProductos().then(libros => {
                const totalLibros = libros.filter(prod => prod.stock > 0)
                const items = <ItemList totalLibros={totalLibros} plantilla="Item" />
                setProductos(items)
            })
        }

    }, [idCategoria])

    return (
        <div className='row cardsLibro'>
            <h1 className='titulo text-center'>La biblioteca del Abuelo</h1>
            {productos}
        </div>
    );
}

