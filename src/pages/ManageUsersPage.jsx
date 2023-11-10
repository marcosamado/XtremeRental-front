import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ManageUsersPage = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className="">
            {data.map((user) => (
                <ul key={user.id} className="flex flex-col border-2 p-5">
                    <li>Id: {user.id}</li>
                    <li>Usuario: {user.nombreDeUsuario}</li>
                    <li>Nombre: {user.nombre}</li>
                    <li>Apellido: {user.apellido}</li>
                    <li>Email: {user.email}</li>
                    <li>es Administrador: {user.esAdmin ? 'si' : 'no'}</li>
                </ul>
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
