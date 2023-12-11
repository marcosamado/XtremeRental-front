import React from 'react';
import { PiUserSquare } from 'react-icons/pi';

const UserProfilePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const favoritos = JSON.parse(localStorage.getItem('favs')) || [];
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
                <ul className="flex flex-col  md:flex-row md:justify-center md:gap-4">
                    {favoritos.map((producto) => (
                        <div key={producto.id}>
                            <div className="relative flex flex-col mb-10 h-auto mx-auto max-w-xs justify-center items-center bg-white border border-gray-700 rounded-lg shadow ">
                                <div className="w-40 h-40 p-5">
                                    <img
                                        className="w-full h-full"
                                        // className="w-full h-60 p-8 rounded-t-lg"
                                        src={producto.imagenes}
                                        alt={producto.nombreProducto}
                                    />
                                </div>

                                <div className="px-5 pb-5 flex flex-col w-full justify-center items-center">
                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                                        {producto.nombreProducto}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default UserProfilePage;
