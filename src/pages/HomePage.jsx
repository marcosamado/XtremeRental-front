import React from 'react';
import Carrusel from '../components/Home/Carrusel';
import WhatsAppButton from '../components/whatsApp/whatsAppButton';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="bg-gradient-to-b from-red-100 to-sky-100">
            <section className="mx-auto p-5 max-w-7xl">
                <Link to={`/productos?tipo=acuaticos`}>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-44 w-full  md:flex">
                            <div className="bg-[url('https://cdn.artphotolimited.com/images/59888232b0ba742a2efde168/1000x1000/kelly-slater-surf-a-tahiti.jpg')] w-full h-52 bg-cover bg-no-repeat bg-center"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-l sm:text-3xl font-bold text-white">
                                Equipo Acuatico
                            </h1>
                            <button className="rounded-full bg-neutral-900 py-2 my-5 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                Ver Mas
                            </button>
                        </div>
                    </div>
                </Link>
                <Link to={`/productos?tipo=montaña`}>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-44 w-full  md:flex">
                            <div className="bg-[url('https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/hiking-5.jpg')] w-full h-52 bg-cover bg-no-repeat bg-center"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-l sm:text-3xl font-bold text-white">
                                Equipo Montaña-Trekking
                            </h1>
                            <button className="rounded-full bg-neutral-900 py-2 my-5 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                Ver Mas
                            </button>
                        </div>
                    </div>
                </Link>
                <Link to={`/productos?tipo=nieve`}>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-44 w-full  md:flex">
                            <div className="bg-[url('https://www.sentirsebella.cl/wp-content/uploads/2017/05/nieve.jpg')] w-full h-52 bg-cover bg-no-repeat "></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-l sm:text-3xl font-bold text-white">
                                Equipo Nieve
                            </h1>
                            <button className="rounded-full bg-neutral-900 py-2 my-5 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                Ver Mas
                            </button>
                        </div>
                    </div>
                </Link>
            </section>

            <h2 className="font-black text-colorOscuro text-center text-2xl md:text-4xl mt-6 p-5">
                PRODUCTOS DESTACADOS
            </h2>
            <section className="p-5">
                <Carrusel />
                <WhatsAppButton />
            </section>
        </div>
    );
};

export default HomePage;
