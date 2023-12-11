import { useState } from 'react';
import { Link, useRevalidator } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

export const ReserveProductCard = ({
    precioTotalDias,
    fechaDeInicio,
    fechaDeDevolucion,
    imagen,
    nombreProducto,
    cantidad,
}) => {
    return (
        <div className="border-b p-2 flex flex-row gap-2 md:gap-5 items-center ">
            <div className="w-[155px] max-w-36 h-28">
                <img
                    className="w-full h-full "
                    src={imagen?.url}
                    alt={nombreProducto}
                />
            </div>
            <div className="flex flex-col px-3 gap-2 w-80 md:w-full">
                <div className="flex flex-col justify-normal gap-3">
                    <span>Nombre: {nombreProducto}</span>
                    <span>Fecha de retiro: {fechaDeInicio} </span>
                    <span>Fecha de devolucion: {fechaDeDevolucion} </span>
                    <span>Cantidad: {cantidad}</span>
                    <span className="text-colorCalido font-semibold">
                        Precio final: ${precioTotalDias}
                    </span>
                </div>
            </div>
        </div>
    );
};
