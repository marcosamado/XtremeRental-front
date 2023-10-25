import React from "react";
import Carrusel from "../components/Home/Carrusel";

const HomePage = () => {
    return (
        <div className=""> 
            <section className="ml-12 mr-12">
                <h2 className="font-bold text-colorCalido text-center text-xl mb-5 mt-5 ">
                    CATEGORIAS
                </h2>
                <div className="md:flex flex-row md:gap-3 mb-6">
                    <div className="bg-[url('https://imagenes.elpais.com/resizer/r6ELDzucn7tMT9H9pkABv2TZWrA=/1960x1103/filters:focal(671x333:681x343)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SRYQACBQBBCO7ADQSE3A3GUSBI.jpg')] w-full h-44 md:h-[400px] bg-cover bg-no-repeat">
                        <h2 className="text-black font-bold text-xl tracking-widest p-2">
                            Equipo Acuatico
                        </h2>
                    </div>
                    <div className="sm:bg-[url('https://img.freepik.com/foto-gratis/silueta-hombres-que-animan-hacer-senderismo-abren-brazos-al-soporte-amanecer-montana-viajes-estilo-vida-pasion-viajes-concepto-aventura-vacaciones-verano-al-aire-libre_1150-61321.jpg?w=1380&t=st=1698203728~exp=1698204328~hmac=ce02334570aa687c2317b176b4087f5af03a29b62faa3bd9b84530b58a875f07')] md:lg:xl:2xlhidden bg-[url('https://img.freepik.com/foto-gratis/impresionante-foto-joven-trepando-acantilado-dia-frio-brumoso_181624-18833.jpg?w=1380&t=st=1698203568~exp=1698204168~hmac=2d93204d1866adc568cb2b3207dd12bcdf70c84da5248e881f7e8a3f4435e46b')] w-full h-44 md:h-[400px] bg-cover bg-no-repeat">
                        <h2 className="text-black font-bold text-xl tracking-widest p-2">
                            Equipo Montaña-Trekking
                        </h2>
                    </div>
                    <div className="bg-[url('https://www.sentirsebella.cl/wp-content/uploads/2017/05/nieve.jpg')] w-full h-44 md:h-[400px] bg-cover bg-no-repeat">
                        <h2 className="text-black font-bold text-xl tracking-widest p-2">
                            Equipo Nieve
                        </h2>
                    </div>
                </div>
            </section>

            <h2 className="font-bold text-colorCalido text-center text-xl mt-6 mb-6">
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
