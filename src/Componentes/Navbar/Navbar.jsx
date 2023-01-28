import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Categorias } from './Categorias/Categorias'
import { Secciones } from './Secciones/Secciones';
import { Search } from './Search/Search';

export const Navbar = ({ cantidad }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid d-flex">

                    {/* Cosas para que funcione el responsive */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {/* Agregación de los distintos elementos del navbar */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Secciones />
                            <Categorias />
                            <Search />
                        </ul>

                        {/* Agregación del carrito */}
                        <CartWidget cantidad={cantidad} />

                    </div>
                </div>
            </nav>
        </>
    );
}
