import React from 'react';
import { Link } from 'react-router-dom';

export const Categorias = () => {
    return (

        <li className="nav-item dropdown px-lg-2">
            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>

            <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to={'/category/Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps'}>Software</Link></li>
                <li><Link className='dropdown-item' to={'/category/Data Wrangling with pandas, NumPy, and Jupyter'}>Python</Link></li>
                <li><Link className='dropdown-item' to={'/category/Architecting, Designing, and Deploying on the Snowflake Data Cloud'}>Data & Memory</Link></li>
                <li><a className="dropdown-item" href="#">Infantiles</a></li>
                <li><a className="dropdown-item" href="#">Novelas</a></li>
            </ul>
        </li>

    );
}
