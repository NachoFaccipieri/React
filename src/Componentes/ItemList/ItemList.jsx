import React from 'react';
import { Item } from '../Item/Item';
import { ItemCart } from '../ItemCart/ItemCart';

export const ItemList = ({ totalLibros, plantilla }) => {

    return (
        <>
            {
                plantilla === "Item"
                    ?
                    totalLibros.map(libro => <Item LIBRO={libro} key={libro.isbn13} />)
                    :
                    totalLibros.map(libro => <ItemCart item={libro} key={libro.isbn13} />)
            }

        </>
    )
}
