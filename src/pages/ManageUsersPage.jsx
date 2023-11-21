import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserEditModal } from '../components/admin/UserEditModal';

const ManageUsersPage = () => {
    const { data } = useLoaderData();

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen((cur) => !cur);

    // const [formData, setFormData] = useState({
    //     nombreDeUsuario: '',
    //     nombre: '',
    //     apellido: '',
    //     email: '',
    //     contrasena: '',
    //     validarcontrasena: '',
    //     esAdmin: false,
    // });

    // const {
    //     nombreDeUsuario,
    //     nombre,
    //     apellido,
    //     email,
    //     contrasena,
    //     validarcontrasena,
    // } = formData;

    console.log(data);
    return (
        <div className="  min-h-screen p-2">
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
                                        {user.role === 'USER'
                                            ? 'USER'
                                            : 'ADMIN'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            className={` text-white text-xs p-1 text-center rounded-md h-10 self-center ${
                                user.role == 'USER'
                                    ? 'bg-colorAgua'
                                    : 'bg-colorCalido'
                            }`}
                        >
                            {user.esAdmin ? 'Quitar admin' : 'Hacer admin'}
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
