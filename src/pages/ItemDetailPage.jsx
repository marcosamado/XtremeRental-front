import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
// import { getItemById } from "../../api/getItemById";
import ProductPictures from '../components/products/ProductPictures';

export const ItemDetailPage = () => {
    const { data } = useLoaderData();

    const navigation = useNavigation();

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    const { id } = useParams();
    const idProduct = id - 1;

    const { precio, title, url, descripcion, tipo, cantidad, off, images } =
        data[idProduct];

    const [currentPicture, setCurrentPicture] = useState(0);
    // const [product, setProduct] = useState({});

    return (
        <>
            <div className="bg-white flex flex-col max-w-4xl mx-auto">
                <div className="flex flex-row max-w-5xl border-2 rounded-md mt-4">
                    <ProductPictures
                        data={data[idProduct]}
                        setCurrentPicture={setCurrentPicture}
                        currentPicture={currentPicture}
                    />
                    <div className="flex-1 flex justify-center">
                        <div className="w-96 h-[520px]">
                            <img
                                className="w-full h-full object-contain"
                                src={images[currentPicture].path}
                                alt={title}
                            />
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="border-2 p-5 m-4 rounded-md flex flex-col gap-3">
                            <h2 className="text-xl">{title}</h2>
                            <p className="text-xl">${precio}</p>
                            {cantidad > 1 && <p>Cantidad: {cantidad}</p>}
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
                    <h3 className=" text-xl">{descripcion}</h3>
                </div>
            </div>
        </>
    );
};

export const getProducts = async () => {
    const res = await fetch('../src/fakeApi/apiProductos.json');
    if (!res.ok)
        throw {
            status: res.status,
            statusText: 'No Encontrado',
        };

    const data = await res.json();

    return { data };
};
