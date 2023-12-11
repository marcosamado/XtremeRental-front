import { useEffect, useState } from 'react';
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
    const user = JSON.parse(localStorage.getItem('user'));
    const [nuevoPrecio, setNuevoPrecio] = useState(precioPorHora);
    const [isFavorite, setIsFavorite] = useState(false);
    const favoritos = JSON.parse(localStorage.getItem('favs')) || [];
    // const [data, setData] = useState();

    const handleValue = (event) => {
        // console.log(event.target.value);
        const nuevoPrecio = precioPorHora * event.target.value;
        setNuevoPrecio(nuevoPrecio);
    };
    const handleClick = () => {
        if (user != null) {
            setIsFavorite(!isFavorite);
        } else {
            alert('tiene que estar registrado');
        }
    };

    useEffect(() => {
        if (isFavorite) {
            let product = {
                id,
                nombreProducto,
                imagenes,
                descripcionProducto,
            };
            favoritos.push(product);
            localStorage.setItem('favs', JSON.stringify(favoritos));
        } else {
            let favoritosStorage =
                JSON.parse(localStorage.getItem('favs')) || [];
            let filteredFavoritos = favoritosStorage.filter(
                (item) => item.id !== id,
            );

            localStorage.setItem('favs', JSON.stringify(filteredFavoritos));
        }
    }, [isFavorite]);

    // const agregarFavorito = async () => {
    //     const settings = {
    //         method: 'POST',
    //     };
    //     try {
    //         const res = await fetch(
    //             `http://localhost:8080/favoritos/${id}/${user.username}`,
    //             settings,
    //         );

    //         if (!res.ok) {
    //             const errorData = await res.json();
    //             console.error('Error al intentar cambiar el rol:', errorData);
    //             throw new Error('Error al cambiar el rol');
    //         }

    //         const data = await res.json();
    //         setData(data);
    //         console.log(data);
    //         // revalidator.revalidate();
    //     } catch (error) {
    //         console.log('Error inesperado:', error);
    //     }
    // };

    // const eliminarFavorito = async () => {
    //     const settings = {
    //         method: 'DELETE',
    //     };
    //     try {
    //         const res = await fetch(
    //             `http://localhost:8080/favoritos/${data}`,
    //             settings,
    //         );
    //         if (!res.ok) {
    //             const errorData = await res.json();
    //             console.error('Error al intentar cambiar el rol:', errorData);
    //             throw new Error('Error al cambiar el rol');
    //         }

    //         // Captura los datos de respuesta si el servidor devuelve alguna información
    //         const responseData = await res.json();
    //         console.log(
    //             'Datos devueltos por la solicitud DELETE:',
    //             responseData,
    //         );

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
                <FaRegHeart
                    onClick={handleClick}
                    className={`text-3xl ${
                        isFavorite &&
                        'bg-deep-orange-800 text-white rounded-lg p-1'
                    }`}
                />
                <button className="w-20 h-8 bg-colorCalido text-xs text-white px-2 py-1 rounded-md">
                    Reservar
                </button>
            </div>
        </div>
    );
};
