import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

export const ProductCard = ({
    precioPorHora,
    id,
    descripcionProducto,
    imagenes,
    stock,
    nombreProducto,
    categoria,
}) => {
    const user = localStorage.getItem('user');
    const [nuevoPrecio, setNuevoPrecio] = useState(precioPorHora);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
        // if (isFavorite == true) {
        //     agregarFavorito(id, nombreProducto);
        // } else {
        //     eliminarFavorito(id);
        // }
    };

    const handleReserve = () => {
        if (!user) {
        } else {
        }
    };

    // const agregarFavorito = async (id, nombreProducto) => {
    //     const settings = {
    //         method: 'POST',
    //     };
    //     try {
    //         const res = await fetch(
    //             `http://localhost:8080/favoritos/${id}/${nombreProducto}`,
    //             settings,
    //         );
    //         if (!res.ok) {
    //             const errorData = await res.json();
    //             console.error('Error al intentar cambiar el rol:', errorData);

    //             throw new Error('Error al cambiar el rol');
    //         }
    //         // revalidator.revalidate();
    //     } catch (error) {
    //         console.log('Error inesperado:', error);
    //     }
    // };
    // const eliminarFavorito = async (id) => {
    //     const settings = {
    //         method: 'DELETE',
    //     };
    //     try {
    //         const res = await fetch(
    //             `http://localhost:8080/favoritos/${id}`,
    //             settings,
    //         );
    //         if (!res.ok) {
    //             const errorData = await res.json();
    //             console.error('Error al intentar cambiar el rol:', errorData);

    //             throw new Error('Error al cambiar el rol');
    //         }
    //         // revalidator.revalidate();
    //     } catch (error) {
    //         console.log('Error inesperado:', error);
    //     }
    // };

    return (
        <div className="border-b p-2 flex flex-row gap-5 items-center ">
            <div className="w-[155px] max-w-36 h-28">
                <Link to={`/productos/${id}`}>
                    <img
                        className="w-full h-full "
                        src={imagenes[0]?.url}
                        alt={nombreProducto}
                    />
                </Link>
            </div>
            <div className="flex flex-col px-3 gap-2 w-80 md:w-full">
                <h2 className=" text-sm font-bold md:text-lg">
                    <Link to={`/productos/${id}`}>{nombreProducto}</Link>
                </h2>
                <div className="flex flex-row items-center justify-normal gap-3">
                    <div>
                        <span className="">Precio por dia: </span>
                        <span className="text-colorCalido font-semibold">
                            {' '}
                            ${nuevoPrecio}
                        </span>
                    </div>
                </div>
                <FaRegHeart
                    onClick={handleClick}
                    className={`text-3xl ${
                        isFavorite &&
                        'bg-deep-orange-800 text-white rounded-lg p-1'
                    }`}
                />
                <button
                    onClick={handleReserve}
                    className="w-20 h-8 bg-colorCalido text-xs text-white px-2 py-1 rounded-md"
                >
                    Reservar
                </button>
            </div>
        </div>
    );
};
