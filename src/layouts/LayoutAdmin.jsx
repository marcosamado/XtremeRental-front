import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
    return (
        <div className="flex flex-row min-h-screen w-full ">
            <div className="w-60 border-2 border-black/50 bg-gray-300">
                <div className="flex flex-col justify-around items-center py-8 gap-5">
                    <h2 className="text-2xl ">Panel Administrador</h2>
                    <h2>User</h2>
                </div>
                <nav>
                    <ul className="flex flex-col gap-2">
                        {/* <Link to="productos">
                            <li className="text-xl indent-1 p-3 hover:bg-colorCalido hover:text-white ">
                                Gestionar Productos
                            </li>
                        </Link> */}
                        <Link to="agregarproducto">
                            <li className="text-xl indent-1 p-3 hover:bg-colorCalido hover:text-white ">
                                Agregar Producto
                            </li>
                        </Link>
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
