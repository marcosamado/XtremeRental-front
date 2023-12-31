import React, { useState } from 'react';
import { useLoaderData, useRevalidator } from 'react-router-dom';
import { UserEditModal } from '../components/admin/UserEditModal';
import { LoadingSpinner } from '../components/products/LoadingSpinner';

const ManageUsersPage = () => {
    const { data } = useLoaderData();
    const revalidator = useRevalidator();

    const handleRoleClick = (user) => {
        let userRole = user.role.toLowerCase();

        if (userRole === 'admin') {
            userRole = 'user';
        } else if (userRole === 'user') {
            userRole = 'admin';
        }
        console.log(userRole);
        cambiarAdmin(user.username, userRole);
    };

    const cambiarAdmin = async (username, role) => {
        const settings = {
            method: 'POST',
        };
        try {
            const res = await fetch(
                `http://localhost:8080/usuarios/${role}/${username}`,
                settings,
            );
            if (!res.ok) {
                const errorData = await res.json();
                console.error('Error al intentar cambiar el rol:', errorData);

                throw new Error('Error al cambiar el rol');
            }
            revalidator.revalidate();
        } catch (error) {
            console.log('Error inesperado:', error);
        }
    };

    return (
        <div className="  min-h-screen p-2">
            {revalidator.state === 'loading' && (
                <div
                    className={`bg-colorOscuro/80 min-w-full min-h-screen fixed right-0 top-0 transition-all duration-500  px-3 bg-opacity-60 bg-clip-padding backdrop-blur-md max-h-full overflow-scroll py-5`}
                >
                    <div className="absolute top-1/2 right-1/2">
                        <LoadingSpinner />
                    </div>
                </div>
            )}
            {data.map((user) => (
                <div key={user.id}>
                    <div className="flex flex-row justify-between border shadow-md mt-2 p-2">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="font-bold pr-4">Id:</td>
                                    <td>{user.id}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold">Usuario:</td>
                                    <td>{user.username}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4">Nombre:</td>
                                    <td>{user.nombre}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4">
                                        Apellido:
                                    </td>
                                    <td>{user.apellido}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4">Email:</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4">
                                        Administrador:
                                    </td>
                                    <td>
                                        {user?.role === 'USER'
                                            ? 'USER'
                                            : 'ADMIN'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            onClick={() => handleRoleClick(user)}
                            className={` text-white text-xs p-1 text-center rounded-md h-10 self-center ${
                                user?.role === 'USER'
                                    ? 'bg-colorAgua'
                                    : 'bg-colorCalido'
                            }`}
                        >
                            {user?.role === 'ADMIN'
                                ? 'Quitar admin'
                                : 'Hacer admin'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageUsersPage;

export const getUsers = async () => {
    const res = await fetch('http://localhost:8080/usuarios');

    if (!res.ok)
        throw {
            status: res.status,
            statusText: 'No Encontrado',
        };

    const data = await res.json();

    return { data };
};
