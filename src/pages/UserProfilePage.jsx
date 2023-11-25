import React from 'react';
import { PiUserSquare } from 'react-icons/pi';

const UserProfilePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

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
            </section>
        </div>
    );
};

export default UserProfilePage;
