import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Card = ({ nombreProducto, precioPorHora, imagenes, id }) => {
    return (
        <div className="relative flex flex-col mb-10 h-auto mx-auto max-w-xs justify-center items-center bg-white border border-gray-700 rounded-lg shadow ">
            <Link to={`/productos/${id}`}>
                <div className="w-40 h-40 p-5">
                    <img
                        className="w-full h-full"
                        // className="w-full h-60 p-8 rounded-t-lg"
                        src={imagenes[0].imagenUrl}
                        alt={nombreProducto}
                    />
                </div>
            </Link>
            <div className="px-5 pb-5 flex flex-col w-full justify-center items-center">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                    {nombreProducto}
                </h5>

                <div className="flex items-center justify-evenly w-full mt-1">
                    <span className="text-lg font-bold text-gray-900">
                        ${precioPorHora}
                    </span>
                    {/* <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
                </div>
                <p className="text-green-500 m-2">RESERVA AHORA</p>
                <Link to="carrito">
                    <BsFillCartFill className="text-lg z-20 text-blue-700 mt-3 bottom-3 absolute" />
                </Link>
            </div>
        </div>
    );
};

export default Card;
