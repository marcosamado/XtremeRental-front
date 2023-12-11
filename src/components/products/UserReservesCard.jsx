export const UserReservesCard = ({
    precioTotal,
    fechaAltaAlquiler,
    fechaFinAlquiler,
    imagen,
    producto,
    cantidad,
}) => {
    producto.map((product) => console.log(product));

    return (
        <div className="border-b p-2 flex flex-row gap-2 md:gap-5 items-center ">
            <div className="flex flex-col px-3 gap-2 w-80 md:w-full">
                <div className="flex flex-col gap-3 h-auto">
                    <div className="flex flex-row gap-2 flex-wrap">
                        {producto.map((product) => (
                            <div className=" w-12 h-12">
                                <img
                                    className="w-full h-full "
                                    src={product.imagenes[0].url}
                                    alt={product.nombreProducto}
                                />
                            </div>
                        ))}
                    </div>

                    <p>Fecha de retiro: {fechaAltaAlquiler} </p>
                    <p>Fecha de devolucion: {fechaFinAlquiler} </p>
                    <p className="text-colorCalido font-semibold">
                        Precio final: ${precioTotal}
                    </p>
                </div>
            </div>
        </div>
    );
};
