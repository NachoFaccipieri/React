import React from 'react';


import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCarritoContext } from '../../context/CarritoContext';
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";

export const Checkout = () => {

    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    let navigate = useNavigate()
    const datosForm = useRef()
    const validacion = true;

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

        if (cliente.nombre === '') {
            Swal.fire({
                icon: 'warning',
                title: "Error!",
                text: "Rellene todos los campos",
            })
            validacion = false;
        }


        if (cliente.reemail != '') {
            if (cliente.reemail != cliente.email) {
                Swal.fire({
                    icon: 'error',
                    title: "Error!",
                    text: "Los emails ingresados no coinciden",
                })
                validacion = false;
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: "Error!",
                text: "Ingrese un email",
            })
            validacion = false;
        }

        if (cliente.dni <= 1) {
            Swal.fire({
                icon: 'warning',
                title: "Error!",
                text: "DNI invalido",
            })
            validacion = false;
        }

        if (cliente.direccion === '') {
            Swal.fire({
                icon: 'warning',
                title: "Error!",
                text: "Ingrese una direccion valida",
            })
            validacion = false;
        }



        if (validacion) {

            const aux = [...carrito]

            aux.forEach(prodCarrito => {
                getProducto(prodCarrito.id).then(prodBDD => {

                    //Descuento el stock:
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodBDD.id, prodBDD)
                })
            });

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {

                Swal.fire({
                    title: '<strong>Compra finalizada con éxito!</strong>',
                    icon: 'success',
                    html:
                        '<b>Total a pagar: $</b>' +
                        totalPrice() +
                        '. Gracias por comprar en nuestra tienda!',
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    confirmButtonText:
                        '<i class="fa fa-thumbs-up"></i> Genial!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                })

                // toast.success(`Compra finalizada. ID de la compra: ${ordenCompra.id}. Total a pagar: $ ${new Intl.NumberFormat('de-DE').format(totalPrice())}`)

                e.target.reset()
                emptyCart(false)
                navigate("/")

            })

        }



    }

    return (

        <>
            {carrito.lenght === 0
                ?
                <>
                    <h2> Carrito vacío! Debe agregar un producto para finalizar</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-outline-success">Continuar comprando</button></Link>
                </>
                :
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
                            <label htmlFor="email" className='form-label'>Repetir Email</label>
                            <input type="email" className='form-control' name="reemail" />
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

            }

        </>


    );
}


