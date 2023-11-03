import React from 'react';
import Carrusel from '../components/Home/Carrusel';
import { Link } from 'react-router-dom';
import { usePageContext } from '../context/pageContext';

const HomePage = () => {
    const { active } = usePageContext();

    return (
        <div className="bg-gradient-to-b from-red-100 to-sky-100">
            <section className="mx-auto p-5 max-w-7xl">
                <Link to={`/productos?tipo=acuaticos&page=${active}`}>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-44 w-full  md:flex">
                            <div className="bg-[url('https://imagenes.elpais.com/resizer/r6ELDzucn7tMT9H9pkABv2TZWrA=/1960x1103/filters:focal(671x333:681x343)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SRYQACBQBBCO7ADQSE3A3GUSBI.jpg')] w-full h-52 bg-cover bg-no-repeat bg-center"></div>
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
                <Link to={`/productos?tipo=montaña&page=${active}`}>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-44 w-full  md:flex">
                            <div className="bg-[url('https://img.freepik.com/foto-gratis/persona-pie-cima-exito-mochilero-cima-montana-generado-ia_188544-61274.jpg?w=1380&t=st=1698289368~exp=1698289968~hmac=d014b82c8d3fc9dd6928cab9d152ec84c03bb53598505e42f8cb2d279a7d04a8')] w-full h-52 bg-cover bg-no-repeat bg-center"></div>
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
                <Link to={`/productos?tipo=nieve&page=${active}`}>
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
                <Carrusel></Carrusel>
            </section>
        </div>
    );
};

export default HomePage;
