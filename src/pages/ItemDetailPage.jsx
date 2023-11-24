import { useState } from 'react';
import { MdLabel } from 'react-icons/md';
import { TbColorSwatch } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import { GiRolledCloth } from 'react-icons/gi';
import ProductPictures from '../components/products/ProductPictures';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ItemDetailPage = () => {
    const { data } = useLoaderData();

    const navigation = useNavigation();

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    const [currentPicture, setCurrentPicture] = useState(0);
    const [bookingDate, setBookingDate] = useState({
        startDate: '',
        endDate: '',
    });
    const { startDate, endDate } = bookingDate;
    // const hoy = new Date().toISOString().split('T')[0];
    // const fechaMaxima = new Date();
    // fechaMaxima.setDate(fechaMaxima.getDate() + 30);
    // const maximo = fechaMaxima.toISOString().split('T')[0];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDate({ ...bookingDate, [name]: value });
    };

    console.log(bookingDate);
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
                        <div className="border-2 p-5 md:m-4 rounded-md flex flex-col gap-5 md:h-[450px]">
                            <p className="text-sm font-semibold">
                                <span>Precio por Dia: </span>
                                <span>${data.precioPorHora}</span>
                            </p>
                            {data.stock > 1 && (
                                <p className="text-sm font-semibold">
                                    Cantidad: {data.stock}
                                </p>
                            )}
                            <label
                                className="text-sm font-bold"
                                htmlFor="startDate"
                            >
                                Fecha de retiro
                            </label>
                            <input
                                onChange={handleChange}
                                className="bg-blue-gray-100 p-2 rounded-sm border-black/50 border"
                                type="date"
                                name="startDate"
                                value={startDate}
                            />
                            <label
                                className="text-sm font-bold"
                                htmlFor="endDate"
                            >
                                Fecha de devolucion
                            </label>
                            <input
                                className="bg-blue-gray-100 p-2 rounded-sm border-black/50 border"
                                onChange={handleChange}
                                type="date"
                                name="endDate"
                                value={endDate}
                            />
                            <div className="flex flex-col gap-2 md:mt-10 md:justify-center md:items-center">
                                <button className="md:w-28 h-8 bg-colorCalido text-white px-2 py-1 rounded-md">
                                    Reservar
                                </button>
                                <button className="md:w-28 h-8 bg-teal-300 text-xs text-white px-2 py-1 rounded-md">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 p-5 m-4 rounded-md flex flex-col gap-3 bg-white">
                    <h3 className=" text-xl mb-4 font-bold">
                        Descripcion del producto:
                    </h3>
                    <h3 className=" text-xl">{data.descripcionProducto}</h3>
                </div>
                <div className="border-2 p-5 m-4 rounded-md flex flex-col gap-3 bg-white">
                    <h3 className=" text-xl mb-4 font-bold">
                        Caracteristicas del Producto:
                    </h3>
                    <div className="flex flex-row items-center gap-2">
                        <MdLabel />
                        <p className="text-base">
                            Marca: <span className="text-gray-600">Prada</span>
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <TbColorSwatch />
                        <p className=" text-base">
                            Color: <span className="text-gray-600">Azul</span>
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <GiRolledCloth />
                        <p className=" text-base">
                            Material:{' '}
                            <span className="text-gray-600">fibra</span>
                        </p>
                    </div>
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
