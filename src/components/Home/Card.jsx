import { BsFillCartFill } from 'react-icons/bs';

const Card = ({ precio, title, Url }) => {
    return (
        <div className="relative flex flex-col mb-10 h-[400px] mx-auto max-w-xs justify-center items-center bg-white border border-gray-700 rounded-lg shadow ">
            <div>
                <img
                    className="w-full h-60 p-8 rounded-t-lg"
                    src={Url}
                    alt="product image"
                />
            </div>
            <div className="px-5 pb-5 flex flex-col w-full justify-center items-center">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                    {title}
                </h5>

                <div className="flex items-center justify-evenly w-full mt-1">
                    <span className="text-lg font-bold text-gray-900">
                        ${precio}
                    </span>
                    {/* <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
                </div>
                <p className="text-green-500 m-2">RESERVA AHORA</p>
                <BsFillCartFill className="text-lg z-20 cursor-pointer text-blue-700 mt-3 bottom-3 absolute" />
            </div>
        </div>
    );
};

export default Card;
