import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

const ManageProductsPage = () => {
    const { data } = useLoaderData();

    const navigation = useNavigation();

    if (navigation.state === 'loading') return <p>Cargado...</p>;
    data.map((product) => console.log(product));
    return (
        <div className="container max-w-3xl mx-auto py-10">
            {data.map((product) => (
                <div
                    key={product.id}
                    className="border p-2 flex flex-row gap-8 items-center max-w-5xl"
                >
                    <div className="w-32 h-20">
                        <img
                            className="w-full h-full "
                            src={product.imagenPrincipal}
                            alt={product.nombreProducto}
                        />
                    </div>
                    <div className="flex flex-col px-3 gap-2 w-80 md:w-full">
                        <h2 className=" text-sm font-medium md:text-lg">
                            {product.nombreProducto}
                        </h2>
                        <p>id: {product.id}</p>
                        <p className="">Stock disponible: {product.stock}</p>
                        <div className="flex flex-row items-center justify-normal gap-3">
                            <div>
                                <span>$ </span>
                                <span>{product.precioPorHora}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="bg-colorAgua text-white p-2 text-base text-center rounded-md">
                            Modificar
                        </button>
                        <button className="bg-colorCalido text-white p-2 text-center rounded-md">
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageProductsPage;
