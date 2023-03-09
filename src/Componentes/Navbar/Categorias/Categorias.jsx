import React from 'react';
import { Link } from 'react-router-dom';

export const Categorias = React.memo(() => {

    return (

        <li className="nav-item dropdown px-2 my-2">
            <a className="active dropdown-toggle btn btn-outline-dark btn-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>

            <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to={'/category/Software'}>Software</Link></li>
                <li><Link className='dropdown-item' to={'/category/machine lerning'}>Machine Lerning</Link></li>
                <li><Link className='dropdown-item' to={'/category/data'}>Data & Memory</Link></li>
                <li><Link className='dropdown-item' to={'/category/Developing'}>Developing</Link></li>
                <li><Link className='dropdown-item' to={'/category/game'}>Game</Link></li>
            </ul>
        </li>

    );
})
