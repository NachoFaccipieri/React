import React from 'react';

export const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <button className='btn btn-outline-warning'><a className="nav-link active" aria-current="page" href="#">Inicio</a></button>
            </li>

            <p className='pe-4'> </p>

            <li className="nav-item">
            <button className='btn btn-outline-info'><a className="nav-link active" aria-current="page" href="#">Contáctanos!</a></button>
            </li>

            <p className='pe-2'> </p>
        </>
    );
}