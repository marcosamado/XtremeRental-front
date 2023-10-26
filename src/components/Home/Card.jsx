import { BsFillCartFill } from 'react-icons/bs';

const Card = ({ precio, title, Url }) => {
    return (
        <div className="relative flex flex-col mb-10 h-[450px] w-full max-w-xs justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="w-full h-60 p-8 rounded-t-lg"
                    src={Url}
                    alt="product image"
                />
            </a>
            <div className="px-5 pb-5 flex flex-col w-full justify-center items-center">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <div className="flex items-center justify-evenly w-full mt-3">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${precio}
                    </span>
                    {/* <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
                </div>
                <p className="text-green-500">
                    En 12 x ${Math.round(precio / 120)}
                </p>
                <BsFillCartFill className="text-lg z-20 cursor-pointer text-blue-700 mt-3 bottom-3 absolute" />
            </div>
        </div>
    );
};

export default Card;
