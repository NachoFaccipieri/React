import React from 'react';

export const Search = () => {
    return (

        // Barra de búsqueda
        <form className="d-flex" role="search">
            <p className='pe-3'> </p>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}
