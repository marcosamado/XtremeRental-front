import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserEditModal } from '../components/admin/UserEditModal';

const ManageUsersPage = () => {
    const { data } = useLoaderData();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [mostrarForm, setMostrarForm] = useState(false);

    const [formData, setFormData] = useState({
        nombreDeUsuario: '',
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        validarcontrasena: '',
        esAdmin: false,
    });

    const {
        nombreDeUsuario,
        nombre,
        apellido,
        email,
        contrasena,
        validarcontrasena,
    } = formData;

    console.log(data);
    return (
        <div className="  min-h-screen p-2">
            {data.map((user) => (
                <>
                    <div className="flex flex-row justify-between border shadow-md mt-2 p-2">
                        <ul key={user.id} className="flex gap-3 p-5">
                            <li>
                                <span className=" font-bold">Usuario:</span>{' '}
                                {user.nombreDeUsuario}
                            </li>
                            <li>
                                <span className=" font-bold">Id: </span>
                                {user.id}
                            </li>
                            <li>
                                <span className=" font-bold">Nombre: </span>
                                {user.nombre}
                            </li>
                            <li>
                                <span className=" font-bold">Apellido: </span>
                                {user.apellido}
                            </li>
                            <li>
                                <span className=" font-bold">Email: </span>
                                {user.email}
                            </li>
                            <li>
                                <span className=" font-bold">
                                    Administrador:{' '}
                                </span>
                                {user.esAdmin ? 'si' : 'no'}
                            </li>
                        </ul>
                        <button
                            className="bg-colorAgua text-white p-2 text-base text-center rounded-md h-10 self-center"
                            onClick={handleOpen}
                        >
                            Gestionar
                        </button>
                    </div>
                    <div>
                        <UserEditModal handleOpen={handleOpen} open={open} />
                    </div>
                </>
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
