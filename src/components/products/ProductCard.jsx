import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({
    precioPorHora,
    id,
    descripcionProducto,
    imagenPrincipal,
    stock,
    nombreProducto,
    categoria,
}) => {
    const [nuevoPrecio, setNuevoPrecio] = useState(precioPorHora);
    const handleValue = (event) => {
        console.log(event.target.value);
        const nuevoPrecio = precioPorHora * event.target.value;
        setNuevoPrecio(nuevoPrecio);
    };

    return (
        <div className="border-b p-2 flex flex-row gap-8 items-center ">
            <div className="w-40 h-24 sm:h-28 md:w-80 md:h-40">
                <Link to={`/productos/${id}`}>
                    <img
                        className="w-full h-full "
                        src={imagenPrincipal}
                        alt={nombreProducto}
                    />
                </Link>
            </div>
            <div className="flex flex-col px-3 gap-2 w-80 md:w-full">
                <h2 className=" text-sm font-light md:text-lg">
                    <Link to={`/productos/${id}`}>{nombreProducto}</Link>
                </h2>
                <div className="flex flex-row items-center justify-normal gap-3">
                    <select
                        className="border border-gray-500 outline-none rounded-sm"
                        onChange={handleValue}
                        name="select"
                    >
                        <option defaultValue={1} value={1}>
                            1 Día
                        </option>
                        <option value={2}>2 Días</option>
                        <option value={3}>3 Días</option>
                        <option value={4}>4 Días</option>
                        <option value={5}>5 Días</option>
                        <option value={6}>6 Días</option>
                    </select>
                    <div>
                        <span>$ </span>
                        <span>{nuevoPrecio}</span>
                    </div>
                </div>
                <button className="w-20 h-8 bg-colorCalido text-xs text-white px-2 py-1 rounded-md">
                    Reservar
                </button>
            </div>
        </div>
    );
};
