import React from 'react';

export const Categorias = () => {
    return (

        <li className="nav-item dropdown px-lg-2">
            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Autoayuda</a></li>
                <li><a className="dropdown-item" href="#">Ciencia Ficcion</a></li>
                <li><a className="dropdown-item" href="#">Fabulas</a></li>
                <li><a className="dropdown-item" href="#">Infantiles</a></li>
                <li><a className="dropdown-item" href="#">Novelas</a></li>
            </ul>
        </li>

    );
}
