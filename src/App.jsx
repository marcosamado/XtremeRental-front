// SE IMPORTA EL ICONO CON EL NOMBRE
import { AiOutlineAliwangwang } from "react-icons/ai";

const App = () => {
    return (
        <div className="container ml-auto mr-auto flex flex-row justify-around flex-wrap  sm:flex-col gap-10 p-10 items-center bg-slate-200">
            {/* Y SE IMPLEMENTA COMO UN COMPONENTE  */}

            <AiOutlineAliwangwang className="text-9xl text-blue-900 shadow-lg shadow-slate-700 rounded-full p-7 bg-white" />

            <h1 className="text-2xl font-bold underline bg-gradient-to-b from-cyan-500 to-pink-500 bg-clip-text text-transparent  shadow-2xl shadow-black rounded p-3 w-60 text-center">
                Hello world!
            </h1>
            <h1 className="text-2xl font-bold text-gray-800 underline bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-2xl shadow-black rounded-md p-3 w-60 text-center">
                Hello world!
            </h1>
            <h1 className="text-2xl font-bold underline text-colorMain bg-gradient-to-r from-gray-900 to-stone-400 shadow-2xl shadow-black rounded-md p-3 w-60 text-center">
                Hello world!
            </h1>
            <h1 className="text-2xl font-bold underline text-colorMain bg-gradient-to-r from-gray-900 to-stone-400 shadow-2xl shadow-black rounded-md p-3 w-60 text-center">
                Hello world!
            </h1>
            <h1 className="text-2xl font-bold underline text-colorMain bg-gradient-to-r from-gray-900 to-stone-400 shadow-2xl shadow-black rounded-md p-3 w-60 text-center">
                Hello world!
            </h1>
        </div>
    );
};

export default App;
