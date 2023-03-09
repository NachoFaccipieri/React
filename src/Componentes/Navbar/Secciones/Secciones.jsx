import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const contacto = () => {
    Swal.fire(
        'Estamos de vacaciones',
        'Por el momento no hay contacto',
        'question'
      )

}

export const Secciones = React.memo(() => {
    return (
        <>
            <li className="nav-item">
                <Link className='nav-link' to={'/'}><button className='btn btn-outline-light btn-dark mx-2'>Inicio</button></Link>
            </li>

            <li className="nav-item">
                <Link className='nav-link'><button className='btn btn-outline-info btn-dark' onClick={() => contacto()}>Contáctanos!</button></Link>
            </li>

            
        </>
    );
})