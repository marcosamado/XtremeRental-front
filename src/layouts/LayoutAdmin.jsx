import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
    return (
        <div className="flex flex-row min-h-screen w-full ">
            <div className="w-60 bg-colorOscuro shadow-md shadow-black/50">
                <div className="flex flex-col justify-around items-center py-8 gap-5">
                    <h2 className="text-2xl text-white">Panel Administrador</h2>
                    <h2 className="text-white">User</h2>
                </div>
                <nav>
                    <ul className="flex flex-col gap-2">
                        <NavLink
                            to="productos"
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-white/5 text-colorCalido text-base indent-1 p-3'
                                    : 'text-white text-base indent-1 p-3 '
                            }
                        >
                            {/* <li className="text-white text-xl indent-1 p-3 hover:text-white"> */}
                            Gestionar Productos
                            {/* </li> */}
                        </NavLink>
                        <NavLink
                            to="agregarproducto"
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-white/5 text-colorCalido text-base indent-1 p-3'
                                    : 'text-white text-base indent-1 p-3 '
                            }
                        >
                            {/* <li className="text-white text-xl indent-1 p-3  hover:text-white "> */}
                            Agregar Producto
                            {/* </li> */}
                        </NavLink>
                    </ul>
                </nav>
            </div>
            <div className="w-auto flex-1 ">
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutAdmin;
