import React from 'react';

import { toast } from 'react-toastify';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {

    let navigate = useNavigate()
    const datosForm = useRef()
    
    const consultarForm = (e) => {

        //Evito que, con el evento, se reinicie la pagina/se vuelva a cargar
        e.preventDefault()

        //Transformo un HTML en un objeto iterable: objeto FormData
        const data = new FormData(datosForm.current)
        //Para consultar los valores del formulario utilizando un objeto FormData, se usa: nombre de la variable (data).get("*atributo 'name' del input*").
        // Ejemplo: data.get("name") || data.get("email")
        //No se utiliza mucho porque los atributos pueden ser muchos


        //Transformo el objeto iterable a objeto simple con fromEntries
        const cliente = Object.fromEntries(data)

        e.target.reset()
        toast.success('Compra finalizada')
        navigate("/")
    }

    return (
        <div className='container contForm'>

            {/* Cuando den click en el boton de tipo submit (type='submit') se ejecuta la función que esté en "onSubmit" del form */}

            {/* Para consultar datos en tiempo real puedo:
                    Usar UseState (complejo)
                    Usar ref */}
            <form onSubmit={consultarForm} ref={datosForm}>

                <div className='mb-3'>
                    <label htmlFor="nombre" className='form-label'>Nombre y apellido</label>
                    <input type="text" className='form-control' name="nombre" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" className='form-control' name="email" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="dni" className='form-label'>DNI</label>
                    <input type="number" className='form-control' name="dni" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="direccion" className='form-label'>Direccion</label>
                    <input type="text" className='form-control' name="direccion" />
                </div>

                <button type='submit' className='btn btn-primary'>Finalizar compra</button>
            </form>
        </div>
    );
}


