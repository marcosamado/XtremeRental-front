import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useNavigation } from "react-router-dom";
// import { getItemById } from "../../api/getItemById";
import ProductPictures from "../components/products/ProductPictures";


export const ItemDetailPage = () => {
    const { data } = useLoaderData();

    const navigation = useNavigation();
    console.log(navigation.state);

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    const {id} = useParams();
    const idProduct = id - 1;
    
    const { precio, title, url, descripcion, tipo, cantidad, off, images } = data[idProduct];

    const [currentPicture, setCurrentPicture] = useState(0);
    // const [product, setProduct] = useState({});

    return (
        <>
                <div className="bg-white flex flex-col max-w-4xl mx-auto">
                    <div className="flex flex-row">
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
                                <h2>{title}</h2>
                                <p>{precio}</p>
                                {cantidad > 1 && (
                                    <p>
                                        Cantidad: {cantidad}
                                    </p>
                                )}
                                <button>Reservar</button>
                                <button>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>{descripcion}</h3>
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