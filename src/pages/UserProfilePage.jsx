import React, { useEffect, useState } from 'react';
import { PiUserSquare } from 'react-icons/pi';
import { UserReservesCard } from '../components/products/UserReservesCard';
import { ImCross } from 'react-icons/im';

const UserProfilePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [favoritos, setFavoritos] = useState(
        JSON.parse(localStorage.getItem('favs') || []),
    );

    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/alquileres/username/${user.username}`)
            .then((response) => response.json())
            .then((response) => setReserves(response))
            .catch((error) => console.error(error.message));
    }, []);

    const handleDeleteFav = (id) => {
        let filteredFavoritos = favoritos.filter((item) => item.id !== id);
        setFavoritos(filteredFavoritos);
        localStorage.setItem('favs', JSON.stringify(filteredFavoritos));
    };

    useEffect(() => {}, [localStorage.getItem('favs')]);

    return (
        <div>
            <section className=" bg-gradient-to-r from-red-100 to-cyan-50 flex flex-col max-w-4xl shadow-2xl shadow-black p-4 m-6 gap-3 md:mx-auto">
                <h1 className=" self-center font-bold text-lg">
                    Datos personales
                </h1>
                <PiUserSquare className=" text-colorAgua text-8xl self-center" />
                <p>Nombre de usuario: {user.username}</p>
                <p>Nombre: {user.nombre}</p>
                <p>Apellido: {user.apellido}</p>
                <p>Email: {user.email}</p>
                <h2 className=" self-center font-bold text-lg ml-3">
                    Favoritos
                </h2>
                <ul className="flex flex-col  md:flex-row md:justify-center md:gap-4">
                    {favoritos?.map((producto) => (
                        <div key={producto.id}>
                            <div className="relative flex flex-col mb-10 h-auto mx-auto max-w-xs justify-center items-center bg-white border border-gray-700 rounded-lg shadow ">
                                <div className="w-40 h-40 p-5">
                                    <img
                                        className="w-full h-full"
                                        // className="w-full h-60 p-8 rounded-t-lg"
                                        src={producto.imagenes[0]?.url}
                                        alt={producto.nombreProducto}
                                    />
                                </div>

                                <div className="px-5 pb-5 flex flex-col w-full justify-center items-center">
                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                                        {producto.nombreProducto}
                                    </h5>
                                    <button
                                        onClick={() => {
                                            handleDeleteFav(producto.id);
                                        }}
                                    >
                                        <ImCross className="mt-5 text-colorCalido" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>

                <h2 className=" self-center font-bold text-lg ml-3">
                    Reservas realizadas
                </h2>
                <div>
                    {reserves?.map((reserve) => (
                        <UserReservesCard key={reserve.id} {...reserve} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default UserProfilePage;
