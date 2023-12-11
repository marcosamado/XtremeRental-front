import React, { useEffect, useState } from 'react';
import { PiUserSquare } from 'react-icons/pi';
import { UserReservesCard } from '../components/products/UserReservesCard';

const UserProfilePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/alquileres/username/${user.username}`)
            .then((response) => response.json())
            .then((response) => setReserves(response))
            .catch((error) => console.error(error.message));
    }, []);

    // console.log(reserves[0].producto[0].nombreProducto);
    console.log(reserves);

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
