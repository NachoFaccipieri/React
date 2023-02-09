import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { consultarBDD } from '../../utils/funciones';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    console.log(idCategoria)
    useEffect(() => {
        if (idCategoria) {
            consultarBDD('https://api.itbook.store/1.0/new').then(Libros => {
                console.log(Libros.books)
                const totalLibros = Libros.books.filter(lib => lib.subtitle === idCategoria)
                console.log(idCategoria)
                setProductos(totalLibros.books)
            })

        } else {
            consultarBDD('https://api.itbook.store/1.0/new').then(totalLibros => {
                setProductos(totalLibros.books)
            })
        }
}, [])

return (
    <div className='row cardLibros'>
        <ItemList totalLibros={productos} />
    </div>
);
}

