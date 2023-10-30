import { BiSearch } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Link } from 'react-router-dom';
import BurguerIcon from './BurguerIcon';
import xtremeLogo from '/logo.png';
import { useState } from 'react';

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [openProducts, setOpenProducts] = useState(false);
    // ESTO ES PARA AUTENTICAR SI EL USUARIO ES ADMIN O NO , y DEBE IR EN UN CONTEXT
    const [userAdmin, setUserAdmin] = useState(true);

    const handleOpenNavbar = () => {
        setOpenNavbar(!openNavbar);
    };
    const handleClosenavbar = (e) => {
        setOpenNavbar(false);
        setOpenProducts(false);
        console.log(e.target);
    };

    const handleOpenProducts = () => {
        setOpenProducts(!openProducts);
    };

    return (
        <div className="flex flex-row items-center justify-around md:justify-around md:max-w-5xl md:mx-auto">
            <div className="w-24 h-24">
                <Link to="/">
                    <img
                        className="w-full h-full"
                        src={xtremeLogo}
                        alt="logo"
                    />
                </Link>
            </div>
            <form className="relative mb-1 md:w-80 md:order-2 md:h-auto">
                <input
                    className="p-[5px] rounded-sm outline-none text-sm md:w-full md:h-8"
                    type="text"
                    name="search"
                    placeholder="¿Que buscas?"
                    maxLength={15}
                />
                <button className="">
                    <BiSearch className="text-gray-400 w-8 text-2xl absolute top-1 right-0 border-l-2 md:w-9" />
                </button>
            </form>
            <button
                onClick={handleOpenNavbar}
                className="flex flex-col md:hidden"
            >
                <BurguerIcon openNavbar={openNavbar} />
            </button>

            {/* ***** MENU DESPLEGABLE ******/}
            <div
                className={`${
                    openNavbar
                        ? 'max-h-full overflow-scroll py-5'
                        : 'max-h-0 overflow-hidden py-0'
                } bg-colorOscuro/80 min-w-full fixed right-0 top-24 transition-all duration-500 md:hidden px-3 bg-opacity-60 bg-clip-padding backdrop-blur-md`}
            >
                <div className={` flex flex-col gap-2 `}>
                    <div to="/login" onClick={handleClosenavbar}>
                        <button className="text-white border w-full rounded-md text-xl py-1 bg-colorCalido border-colorCalido">
                            Iniciar sesion
                        </button>
                    </div>
                </div>
                <ul
                    className={`flex flex-col text-left gap-1 text-xl text-white mt-5`}
                >
                    <Link to="/" onClick={handleClosenavbar}>
                        <li className=" rounded-sm p-2 ">HOME</li>
                    </Link>

                    <ul className="bg-colorOscuro overflow-hidden w-full h-full bg-opacity-0 bg-clip-padding">
                        <div
                            onClick={handleOpenProducts}
                            className="flex flex-row justify-between items-center"
                        >
                            <li
                                className={`${
                                    openProducts && 'text-colorAgua '
                                } rounded-sm p-2 transition-all duration-300`}
                            >
                                Productos
                            </li>
                            <MdKeyboardArrowRight
                                className={`${
                                    openProducts && 'rotate-90 text-colorAgua'
                                } text-3xl transition-all duration-300`}
                            />
                        </div>
                        <div
                            className={`${
                                openProducts ? 'h-32 py-1' : 'h-0 py-0'
                            }  transition-all duration-300`}
                        >
                            <Link to="/productos?tipo=nieve">
                                <li
                                    className="bg-colorOscuro text-base hover:bg-orangeMain rounded-sm py-2 indent-3 bg-opacity-10 bg-clip-padding border-b border-r border-colorAgua"
                                    onClick={handleClosenavbar}
                                >
                                    Nieve
                                </li>
                            </Link>

                            <Link to="/productos?tipo=montaña">
                                <li
                                    className="bg-colorOscuro hover:bg-orangeMain text-base rounded-sm py-2 indent-3 bg-opacity-10 bg-clip-padding border-b border-r border-colorAgua"
                                    onClick={handleClosenavbar}
                                >
                                    Montaña
                                </li>
                            </Link>

                            <Link to="/productos?tipo=acuaticos">
                                <li
                                    className="bg-colorOscuro hover:bg-orangeMain text-base rounded-sm py-2 indent-3 bg-opacity-10 bg-clip-padding border-b border-r border-colorAgua"
                                    onClick={handleClosenavbar}
                                >
                                    Agua
                                </li>
                            </Link>
                        </div>
                    </ul>
                    <Link to="/carrito" onClick={handleClosenavbar}>
                        <li className="hover:bg-orangeMain rounded-sm p-2">
                            Carrito
                        </li>
                    </Link>
                </ul>
            </div>

            {/* *****MENU DESKTOP ***** */}

            <ul
                className={`hidden md:flex flex-row text-left gap-1 text-base text-white w-auto items-center `}
            >
                <Link to="/" onClick={handleClosenavbar}>
                    <li className=" rounded-sm p-2 text-colorAgua">HOME</li>
                </Link>

                <ul
                    onMouseEnter={() => setOpenProducts(true)}
                    onMouseOut={() => setOpenProducts(false)}
                    className="bg-colorOscuro overflow-hidden h-full bg-opacity-0 bg-clip-padding relative "
                >
                    <div
                        onMouseEnter={() => setOpenProducts(true)}
                        onMouseOut={() => setOpenProducts(false)}
                        // onClick={handleOpenProducts}
                        className="flex flex-row items-center hover:cursor-pointer"
                    >
                        <li
                            onMouseEnter={() => setOpenProducts(true)}
                            onMouseOut={() => setOpenProducts(false)}
                            className={`${
                                openProducts && 'bg-colorCalido '
                            } rounded-sm p-2 transition-all duration-300 `}
                        >
                            Productos
                        </li>
                        {/* <MdKeyboardArrowRight
                            className={`${
                                openProducts && "rotate-90 text-colorAgua"
                            } text-3xl transition-all duration-300`}
                        /> */}
                    </div>
                    <div
                        onMouseEnter={() => setOpenProducts(true)}
                        onMouseOut={() => setOpenProducts(false)}
                        className={`${
                            openProducts
                                ? 'max-h-full w-44  overflow-scroll'
                                : 'max-h-0 w-0 overflow-hidden '
                        } transition-all fixed top-24 bg-colorOscuro/80  duration-500 bg-opacity-60 bg-clip-padding backdrop-blur-md`}
                    >
                        <Link to="/productos?tipo=nieve">
                            <li
                                onMouseEnter={() => setOpenProducts(true)}
                                onMouseOut={() => setOpenProducts(false)}
                                className="bg-colorOscuro text-base hover:bg-colorCalido rounded-sm py-2 indent-3 bg-opacity-10 bg-clip-padding border-b border-r border-colorAgua"
                                onClick={handleClosenavbar}
                            >
                                Nieve
                            </li>
                        </Link>

                        <Link to="/productos?tipo=montaña">
                            <li
                                onMouseEnter={() => setOpenProducts(true)}
                                onMouseOut={() => setOpenProducts(false)}
                                className="bg-colorOscuro hover:bg-colorCalido text-base rounded-sm py-2 indent-3 bg-opacity-10 bg-clip-padding border-b border-r border-colorAgua"
                                onClick={handleClosenavbar}
                            >
                                Montaña
                            </li>
                        </Link>

                        <Link to="/productos?tipo=acuaticos">
                            <li
                                onMouseEnter={() => setOpenProducts(true)}
                                onMouseOut={() => setOpenProducts(false)}
                                className="bg-colorOscuro hover:bg-colorCalido text-base rounded-sm py-2 indent-3 bg-opacity-10 bg-clip-padding border-b border-r border-colorAgua"
                                onClick={handleClosenavbar}
                            >
                                Agua
                            </li>
                        </Link>
                    </div>
                </ul>

                <Link to="/carrito" onClick={handleClosenavbar}>
                    <li className="hover:bg-orangeMain rounded-sm p-2">
                        Carrito
                    </li>
                </Link>
                {userAdmin && (
                    <Link to="/administrador" onClick={handleClosenavbar}>
                        <li className="hover:bg-orangeMain rounded-sm p-2">
                            Admin
                        </li>
                    </Link>
                )}
            </ul>
            <div
                className="hidden md:block order-2"
                to="/login"
                onClick={handleClosenavbar}
            >
                <button className="text-white border w-auto rounded-md text-xs py-2 bg-colorCalido border-colorCalido px-3">
                    Iniciar sesion
                </button>
            </div>
        </div>
    );
};

export default Navbar;
