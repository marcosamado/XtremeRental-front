import { useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { DeleteProductModal } from './deleteProductModal';

const AdminProductCard = ({
    id,
    imagenes,
    nombreProducto,
    stock,
    precioPorHora,
    revalidator,
    handleClick,
}) => {
    const handleOpen = (value) => setSize(value);
    const [size, setSize] = useState(null);

    return (
        <>
            <div
                // key={product.id}
                className="border p-2 flex flex-row gap-8 items-center max-w-5xl"
            >
                <div className="w-32 h-20">
                    <img
                        className="w-full h-full "
                        src={imagenes[0]?.imagenUrl}
                        alt={nombreProducto}
                    />
                </div>
                <div className="flex flex-col px-3 gap-2 w-80 md:w-full">
                    <h2 className=" text-sm font-medium md:text-lg">
                        {nombreProducto}
                    </h2>
                    <p>id: {id}</p>
                    <p className="">Stock disponible: {stock}</p>
                    <div className="flex flex-row items-center justify-normal gap-3">
                        <div>
                            <span>$ </span>
                            <span>{precioPorHora}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="bg-colorAgua text-white p-2 text-base text-center rounded-md">
                        Modificar
                    </button>
                    <button
                        onClick={() => handleOpen('xs')}
                        className="bg-colorCalido text-white p-2 text-center rounded-md flex items-center justify-center"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
            <div>
                <DeleteProductModal
                    handleOpen={handleOpen}
                    size={size}
                    handleClick={handleClick}
                    id={id}
                    nombreProducto={nombreProducto}
                />
            </div>
        </>
    );
};

export default AdminProductCard;
