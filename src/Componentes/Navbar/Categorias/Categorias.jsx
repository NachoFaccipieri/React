import React from 'react';
import { Link } from 'react-router-dom';

export const Categorias = () => {
    return (

        <li className="nav-item dropdown px-lg-2">
            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>

            <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to={'/category/1'}>Software</Link></li>
                <li><Link className='dropdown-item' to={'/category/2'}>Python</Link></li>
                <li><Link className='dropdown-item' to={'/category/3'}>Data & Memory</Link></li>
            </ul>
        </li>

    );
}
