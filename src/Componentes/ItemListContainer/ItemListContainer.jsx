import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { consultarBDD } from '../../utils/funciones';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {

    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (idCategoria) {
            console.log(idCategoria)
            consultarBDD('../json/libros.json').then(libros => {
                const totalLibros = libros.filter(prod => prod.category.nombre === (idCategoria))
                const items = <ItemList totalLibros={totalLibros} plantilla="Item"/>
                setProductos(items)
            })
        } else {
            consultarBDD('./json/libros.json').then(totalLibros => {
                const items = <ItemList totalLibros={totalLibros} plantilla="Item"/>
                setProductos(items)
            })
        }

    }, [idCategoria])

    return (
        <div className='row cardsLibro'>
            <ItemList totalLibros={productos} />
        </div>
    );
}

