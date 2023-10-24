import React from "react";
import Carrusel from "../components/Carrusel";

const HomePage = () => {
    return (
        <div>
            <section className="">
                <h2 className="font-bold text-colorCalido text-center text-xl mb-3 mt-3 ">
                    CATEGORIAS
                </h2>
                <div className="flex flex-col md:gap-3">
                    <div className="bg-[url('https://imagenes.elpais.com/resizer/r6ELDzucn7tMT9H9pkABv2TZWrA=/1960x1103/filters:focal(671x333:681x343)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SRYQACBQBBCO7ADQSE3A3GUSBI.jpg')] w-full h-44 bg-cover bg-no-repeat">
                        <h2 className="text-black font-bold text-xl tracking-widest p-2">
                            Equipo Acuatico
                        </h2>
                    </div>
                    <div className="bg-[url('https://img.freepik.com/fotos-premium/climber-sube-montana-hermoso-paisaje-concepto-estilo-vida-activo-ai-generativa_888418-2107.jpg?w=1380')] w-full h-44 bg-cover bg-no-repeat">
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
            <h2 className="font-bold text-colorCalido text-center text-xl mb-3 mt-6 ">
                PRODUCTOS DESTACADOS
            </h2>

            <section>
                <Carrusel></Carrusel>
            </section>
        </div>
    );
};

export default HomePage;
