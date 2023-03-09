import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Categorias } from './Categorias/Categorias'
import { Secciones } from './Secciones/Secciones';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid d-flex">

                    {/* Cosas para que funcione el responsive */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse fixed-top navBar" id="navbarSupportedContent">

                        {/* Agregación de los distintos elementos del navbar */}
                        <ul className="navbar-nav me-auto ">
                            <Secciones />
                            <Categorias />
                            
                        </ul>

                        {/* Agregación del carrito */}
                        <CartWidget />

                    </div>
                </div>
            </nav>
        </>
    );
}
