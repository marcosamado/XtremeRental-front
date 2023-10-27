import React from "react";
import Carrusel from "../components/Home/Carrusel";

const HomePage = () => {
    return (
        <div className="bg-gradient-to-b from-red-100 to-sky-100"> 
            <section className="flex justify-center">
                <div className="sm:w-2/3 md:flex flex-col md:gap-3 mb-6 mt-5">
                    <div className="bg-[url('https://imagenes.elpais.com/resizer/r6ELDzucn7tMT9H9pkABv2TZWrA=/1960x1103/filters:focal(671x333:681x343)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SRYQACBQBBCO7ADQSE3A3GUSBI.jpg')] w-full h-44 bg-cover bg-no-repeat bg-center">
                        <h2 className="text-black font-bold text-xl tracking-widest p-2">
                            Equipo Acuatico
                        </h2>
                    </div>
                    <div className="bg-[url('https://img.freepik.com/foto-gratis/persona-pie-cima-exito-mochilero-cima-montana-generado-ia_188544-61274.jpg?w=1380&t=st=1698289368~exp=1698289968~hmac=d014b82c8d3fc9dd6928cab9d152ec84c03bb53598505e42f8cb2d279a7d04a8')] w-full h-44 bg-cover bg-no-repeat bg-center">
                        <h2 className="text-black font-bold text-xl tracking-widest p-2">
                            Equipo Montaña-Trekking
                        </h2>
                    </div>
                    <div className="bg-[url('https://www.sentirsebella.cl/wp-content/uploads/2017/05/nieve.jpg')] w-full h-44 bg-cover bg-no-repeat">
                        <h2 className="text-black font-bold text-xl tracking-widest p-2">
                            Equipo Nieve
                        </h2>
                    </div>
                </div>
            </section>

            <h2 className="font-black text-colorOscuro text-center text-2xl md:text-4xl mt-6 mb-6">
                PRODUCTOS DESTACADOS
            </h2>
            <section className="mb-8">
                <Carrusel></Carrusel>
            </section>

            <h2 className="font-bold text-colorCalido text-center text-xl mt-6 mb-6">
                OFERTAS
            </h2>
            <section className="mb-8">
                <Carrusel></Carrusel>
            </section>
        </div>
    );
};

export default HomePage;
