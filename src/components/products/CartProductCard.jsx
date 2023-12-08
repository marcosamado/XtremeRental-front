import { useState } from 'react';
import { Link, useRevalidator } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

export const CartProductCard = ({
    precioTotalDias,
    id,
    fechaDeInicio,
    fechaDeDevolucion,
    imagen,
    nombreProducto,
    cantidad,
    setReserve,
}) => {
    const deleteReserveFromCart = () => {
        // Paso 1: Obtén el array de objetos desde el localStorage
        let reservas = JSON.parse(localStorage.getItem('reserves'));

        // Paso 2: Encuentra el índice del elemento que deseas eliminar (supongamos que tienes el id del objeto a eliminar)
        let idElementoAEliminar = id; // Reemplaza con el valor correcto
        let indiceElementoAEliminar = reservas.findIndex(function (objeto) {
            return objeto.id === idElementoAEliminar;
        });

        // Paso 3: Elimina el elemento del array
        if (indiceElementoAEliminar !== -1) {
            reservas.splice(indiceElementoAEliminar, 1);
        }

        // Paso 4: Guarda el array actualizado en el localStorage
        localStorage.setItem('reserves', JSON.stringify(reservas));

        setReserve(JSON.parse(localStorage.getItem('reserves')));
    };

    return (
        <div className="border-b p-2 flex flex-row gap-5 items-center ">
            <div className="w-[155px] max-w-36 h-28">
                <Link to={`/productos/${id}`}>
                    <img
                        className="w-full h-full "
                        src={imagen.url}
                        alt={nombreProducto}
                    />
                </Link>
            </div>
            <div className="flex flex-col px-3 gap-2 w-80 md:w-full">
                <h2 className=" text-sm font-bold md:text-lg">
                    <Link to={`/productos/${id}`}>{nombreProducto}</Link>
                </h2>
                <div className="flex flex-col justify-normal gap-3">
                    <span>Fecha de retiro: {fechaDeInicio} </span>
                    <span>Fecha de devolucion: {fechaDeDevolucion} </span>
                    <span>Cantidad: {cantidad}</span>
                    <span className="text-colorCalido font-semibold">
                        Precio final: ${precioTotalDias}
                    </span>
                </div>
                <button onClick={deleteReserveFromCart}>
                    <FaRegTrashAlt />
                </button>
            </div>
        </div>
    );
};
