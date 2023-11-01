import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import ProductPictures from '../components/products/ProductPictures';

const ItemDetailPage = () => {
    const { data } = useLoaderData();

    const navigation = useNavigation();

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    const [currentPicture, setCurrentPicture] = useState(0);

    return (
        <>
            <div className="bg-white flex flex-col max-w-4xl mx-auto">
                <div className="flex flex-row max-w-5xl border-2 rounded-md mt-4">
                    {/* <ProductPictures
                        data={data}
                        setCurrentPicture={setCurrentPicture}
                        currentPicture={currentPicture}
                    /> */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-96 h-[520px]">
                            <img
                                className="w-full h-full object-contain"
                                // src={images[currentPicture].path}
                                src={data.imagenPrincipal}
                                alt={data.nombreProducto}
                            />
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="border-2 p-5 m-4 rounded-md flex flex-col gap-3">
                            <h2 className="text-xl">{data.nombreProducto}</h2>
                            <p className="text-xl">${data.precioPorHora}</p>
                            {data.stock > 1 && <p>Cantidad: {data.stock}</p>}
                            <button className="w-28 h-8 bg-colorCalido text-white px-2 py-1 rounded-md">
                                Reservar
                            </button>
                            <button className="w-28 h-8 bg-sky-500 text-xs text-white px-2 py-1 rounded-md">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className=" text-xl mb-4">Descripcion del producto:</h3>
                    <h3 className=" text-xl">{data.descripcionProducto}</h3>
                </div>
            </div>
        </>
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
