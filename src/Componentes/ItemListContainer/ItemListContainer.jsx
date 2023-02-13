import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { consultarBDD } from '../../utils/funciones';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])

    // const getLibro = () =>{
    //     consultarBDD('./json/libros.json').then(totalLibros => {
    //         setProductos(totalLibros)
    //     })
    // }
    // const getLibroByCat = (idCategoria) => {
    //     consultarBDD('../json/libros.json').then(totalLibros => {
    //         const filtrados= totalLibros.filter(li => li.category === parseInt(idCategoria))
    //         setProductos(filtrados)
    //     })
    // }

    useEffect(() => {


        if(idCategoria) { //undefined me da falso
            consultarBDD('../json/libros.json').then(libros => {
              const totalLibros = libros.filter(prod => prod.category === parseInt(idCategoria))
              const items = ItemList({totalLibros})
              setProductos(items)
            })
          } else {
            consultarBDD('./json/libros.json').then(totalLibros => {
              const items = ItemList({totalLibros})
              setProductos(items)
            })
          }









        // if(idCategoria){
        //     getLibroByCat(idCategoria)
        // } else {
        //     getLibro()
        // }
}, [idCategoria])

return (
    <div className='row cardsLibro'>
        <ItemList totalLibros={productos} />
    </div>
);
}

