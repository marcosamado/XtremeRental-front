import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({
    url,
    precio,
    id,
    descripcion,
    cantidad,
    title,
}) => {
    const [nuevoPrecio, setNuevoPrecio] = useState(precio);
    const handleValue = (event) => {
        console.log(event.target.value);
        const nuevoPrecio = precio * event.target.value;
        setNuevoPrecio(nuevoPrecio);
    };

    return (
        // <Link to={`${id}`}>
        <div className="border-b p-5 flex flex-row gap-8 items-center">
            <img className="w-24 h-24 md:w-32 md:h-32" src={url} alt={title} />
            <div className="flex flex-col px-3 gap-2">
                <h2 className=" text-base font-light ">{title}</h2>
                <div>
                    <select onChange={handleValue} name="select">
                        <option defaultValue={1} value={1}>
                            1 Día
                        </option>
                        <option value={2}>2 Días</option>
                        <option value={3}>3 Días</option>
                        <option value={4}>4 Días</option>
                        <option value={5}>5 Días</option>
                        <option value={6}>6 Días</option>
                    </select>
                    <p>{nuevoPrecio}</p>
                    <button className="w-auto h-auto bg-colorCalido text-white p-2 rounded-md">
                        Reservar
                    </button>
                </div>
            </div>
        </div>
        // </Link>
    );
};
