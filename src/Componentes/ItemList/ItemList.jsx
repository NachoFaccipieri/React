import React from 'react';
import { Item } from '../Item/Item';

export const ItemList = ({totalLibros}) => {
    
    return (
        <>
            {totalLibros.map(libro => <Item LIBRO={libro} key={libro.isbn13}/>)}
        </>
    )
}
