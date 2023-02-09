import React from 'react';
import { Link } from 'react-router-dom';

export const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className='nav-link' to={'/'}><button className='btn btn-outline-warning'>Inicio</button></Link>
            </li>

            <p className='pe-1'> </p>

            <li className="nav-item">
                <Link className='nav-link'><button className='btn btn-outline-info'>Contáctanos!</button></Link>
            </li>

            <p className='pe-2'> </p>
        </>
    );
}