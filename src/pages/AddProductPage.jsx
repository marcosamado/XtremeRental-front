import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useRef } from 'react';

const AddProductPage = () => {
    const { data } = useLoaderData();
    const [imgFile, setImgFile] = useState([]);

    function validaciones(nombre, descripcion, cantidad, precio, imagen) {
        // if (nombre.trim().length < 4 || nombre.trim().length > 20 )  {
        //     return false;
        // } else if (descripcion.length < 10 || descripcion.length >= 50) {
        //     return false;
        // } else if (cantidad <= 0) {
        //     return false;
        // } else if (precio <= 0) {
        //     return false;
        // } else if (imagen) {
        //     return false;
        // } else {
        //     return true;
        // }
        return true;
    }

    const imgRef = useRef(null);

    const [datosForm, setDatosForm] = useState({
        nombreProducto: '',
        descripcionProducto: '',
        stock: 0,
        precioPorHora: 0,
        imagenes: [],
        categoria: 'nieve',
    });

    const handleChangeImg = (event) => {
        setImgFile(event.target.files);
    };
    console.log(imgFile);
    const {
        nombreProducto,
        descripcionProducto,
        stock,
        precioPorHora,
        imagenes,
        categoria,
    } = datosForm;
    const postImage = async (imgFile) => {
        // if (!file) throw new Error("No hay ningúna imagen para subir");
        const formData = new FormData();
        // formData.append("bucketName", "1023c04-grupo3xr");
        // formData.append("filePath", "/Users");
        formData.append('file', imgFile[0]);
        try {
            const res = await fetch(`http://localhost:8080/assets/upload`, {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) {
                // Crear un objeto de error personalizado con estado y ok
                const error = new Error('Error en al subir las imagenes');
                error.status = res.status;
                error.ok = false;
                throw error;
            }
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            throw new Error('Error al subir las imagenes');
        }
    };

    const handleClick = async () => {
        const resImg = await postImage(imgFile);
        const array = [resImg];
        setDatosForm({ ...datosForm, imagenes: array });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const res = validaciones(
            nombreProducto,
            descripcionProducto,
            stock,
            precioPorHora,
            imagenes,
        );

        if (res) {
            const payload = {
                nombreProducto,
                descripcionProducto,
                stock,
                precioPorHora,
                imagenes,
                categoria,
            };

            const url = 'http://localhost:8080/productos';
            const settings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            };

            //

            fetch(url, settings)
                .then((response) => response.json())
                .then((data) => {
                    // window.alert('Producto agregado correctamente');
                    console.log(data);
                });
        } else {
            console.log('error submit');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatosForm({
            ...datosForm,
            [name]: value,
        });
    };

    return (
        <div className="bg-gradient-to-b from-red-100 to-sky-100 min-h-screen">
            <h1 className="text-center font-bold text-3xl p-10">
                Agregar Producto
            </h1>
            <form
                onSubmit={handleSubmit}
                className="container flex flex-col gap-3 max-w-md mx-auto items-center"
            >
                <label
                    className="block  text-gray-700 text-lg font-bold "
                    htmlFor="title"
                >
                    Nombre del producto
                </label>
                <input
                    type="text"
                    name="nombreProducto"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    value={nombreProducto}
                    onChange={handleChange}
                />
                <label
                    className="block  text-gray-700 text-lg font-bold "
                    htmlFor="description"
                >
                    Descripcion del producto
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="descripcionProducto"
                    value={descripcionProducto}
                    onChange={handleChange}
                />
                <label
                    className="block  text-gray-700 text-lg font-bold "
                    htmlFor="cantidad"
                >
                    Stock del producto
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="stock"
                    value={stock}
                    onChange={handleChange}
                />
                <label
                    className="block  text-gray-700 text-lg font-bold "
                    htmlFor="precio"
                >
                    Precio por hora del producto
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="precioPorHora"
                    value={precioPorHora}
                    onChange={handleChange}
                />
                <label
                    className="block  text-gray-700 text-lg font-bold "
                    htmlFor="imgMain"
                >
                    Imagenes del producto
                </label>
                <input
                    type="file"
                    multiple
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="imagenes"
                    files={imagenes}
                    onChange={handleChangeImg}
                    ref={imgRef}
                />
                <button
                    type="button"
                    onClick={handleClick}
                    className="bg-transparent hover:bg-colorAgua text-colorAgua font-semibold hover:text-white p-3 border border-colorAgua hover:border-transparent rounded"
                >
                    subir imagenes
                </button>

                <label
                    className="block  text-gray-700 text-lg font-bold "
                    htmlFor="category"
                >
                    Categoria del producto
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="categoria"
                    value={categoria}
                    onChange={handleChange}
                >
                    <option value="nieve">Nieve</option>
                    <option value="montaña">montaña</option>
                    <option value="agua">Agua</option>
                </select>

                <button
                    type="submit"
                    className="m-5 bg-transparent hover:bg-colorAgua text-colorAgua font-semibold hover:text-white py-3 px-20 border border-colorAgua hover:border-transparent rounded"
                >
                    Agregar
                </button>
            </form>
        </div>
    );
};

export const getProducts = async () => {
    const res = await fetch('http://localhost:8080/productos');

    if (!res.ok)
        throw {
            status: res.status,
            statusText: 'No Encontrado',
        };

    const data = await res.json();

    return { data };
};

export default AddProductPage;
