import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import ProductPictures from '../components/products/ProductPictures';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ItemDetailPage = () => {
    const { data } = useLoaderData();

    const navigation = useNavigation();

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    const [currentPicture, setCurrentPicture] = useState(0);

    return (
        <div className="">
            <div className="bg-gradient-to-r from-red-100 to-cyan-50 flex flex-col md:max-w-4xl mx-auto shadow-2xl shadow-black md:p-10">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-xl p-3 font-bold flex-grow">
                        {data.nombreProducto}
                    </h2>
                    <Link to="/productos?tipo=nieve">
                        <BsFillArrowLeftCircleFill className="p-3 w-auto h-auto text-2xl" />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row md:max-w-5xl border-2 rounded-md bg-white">
                    <ProductPictures
                        setCurrentPicture={setCurrentPicture}
                        currentPicture={currentPicture}
                        data={data}
                    />
                    <div className="flex-1 flex justify-center order-1">
                        <div className=" w-48 h-[260px] md:w-96 md:h-[520px] ">
                            <img
                                className="w-full h-full object-contain"
                                // src={images[currentPicture].path}
                                src={data?.imagenes[currentPicture]?.url}
                                alt={data?.nombreProducto}
                            />
                        </div>
                    </div>

                    <div className="flex-2 order-2 ">
                        <div className="border-2 p-5 md:m-4 rounded-md flex flex-col gap-3 md:h-[450px]">
                            <p className="text-2xl md:text-xl font-bold">
                                ${data.precioPorHora}
                            </p>
                            {data.stock > 1 && (
                                <p className="text-xl">
                                    Cantidad: {data.stock}
                                </p>
                            )}
                            <button className="md:w-28 h-8 bg-colorCalido text-white px-2 py-1 rounded-md">
                                Reservar
                            </button>
                            <button className="md:w-28 h-8 bg-teal-300 text-xs text-white px-2 py-1 rounded-md">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-2 p-5 m-4 rounded-md flex flex-col gap-3 bg-white">
                    <h3 className=" text-xl mb-4 font-bold">
                        Descripcion del producto:
                    </h3>
                    <h3 className=" text-xl">{data.descripcionProducto}</h3>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailPage;

export const getProductById = async (id) => {
    const res = await fetch(`http://localhost:8080/productos/${id}`);
    if (!res.ok)
        throw {
            status: res.status,
            statusText: 'No Encontrado',
        };

    const data = await res.json();

    return { data };
};
