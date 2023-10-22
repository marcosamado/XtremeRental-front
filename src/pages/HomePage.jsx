import React from "react";

const HomePage = () => {
    return (
        <div>
            <section className="">
                <h2 className="font-bold text-orange-700 text-center text-xl mb-3 mt-3 ">
                    CATEGORIAS
                </h2>
                <div className="flex flex-col md:gap-3">
                    <div className="bg-[url('https://www.diariodenavarra.es/uploads/2012/01/05/60b1169124647.jpeg')] w-full h-44 bg-cover bg-no-repeat">
                        <h2 className="text-red-600 font-bold text-2xl tracking-widest p-2">
                            AGUA
                        </h2>
                    </div>
                    <div className="bg-[url('https://www.intex.es/blog/wp-content/uploads/2017/09/StockSnap_RQQGZIFM7U.jpg')] w-full h-44 bg-cover bg-no-repeat">
                        <h2 className="text-red-600 font-bold text-2xl tracking-widest p-2">
                            MONTAÑA
                        </h2>
                    </div>
                    <div className="bg-[url('https://www.sentirsebella.cl/wp-content/uploads/2017/05/nieve.jpg')] w-full h-44 bg-cover bg-no-repeat">
                        <h2 className="text-red-600 font-bold text-2xl tracking-widest p-2">
                            NIEVE
                        </h2>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    );
};

export default HomePage;
