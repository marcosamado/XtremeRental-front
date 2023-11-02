import { useState } from 'react';
import { useLoaderData} from 'react-router-dom';

const AddProductPage = () => {

    const { data } = useLoaderData();

    function validaciones(nombre, descripcion, cantidad, precio, imagen) {
        if (nombre.trim().length < 4 || nombre.trim().length > 20 )  {
            return false;
        } else if (descripcion.length < 10 || descripcion.length >= 50) {
            return false;
        } else if (cantidad <= 0) {
            return false;
        } else if (precio <= 0) {
            return false;
        } else if (imagen == null) {
            return false;
        } else {
            return true;
        }
    }

    const [datosForm, setDatosForm] = useState({
        title: '',
        description: '',
        cantidad: 0,
        precio: 0,
        imgMain: '',
        category: 'nieve',
    });

    const { title, description, cantidad, precio, imgMain, category } =
        datosForm;

    const handleSubmit = (event) => {
        event.preventDefault();

        const res = validaciones(title, description, cantidad, precio, imgMain);

        // if (!title.trim() || !description.trim()) {
        // return setError("hay un errorcito")
        // setDatosForm({
        //     ...datosForm,
        // });

        if (res) {
            console.log(title, description, cantidad, precio, imgMain, category);

            const payload = {
                nombreProducto: title,
                descripcionProducto: description,
                stock: cantidad,
                precioPorHora: precio,
                imagenPrincipal: imgMain,
                categoria: category,
            };
    
            const url = 'http://localhost:8080/productos';
            const settings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            };
    
            fetch(url, settings)
                .then((response) => response.json())
                .then((data) => {
                    window.alert('Producto agregado correctamente');
                    console.log(data);
                });
        } else {
            console.log("error submit");
        }
    
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatosForm({
            ...datosForm,
            [name]: value,
        });
    };

    return (
        <div className='bg-gradient-to-b from-red-100 to-sky-100 min-h-screen'>
            <h1 className="text-center font-bold text-3xl p-10">
                Agregar Producto
            </h1>
            <form
                onSubmit={handleSubmit}
                className="container flex flex-col gap-3 max-w-md mx-auto items-center"
            >
                <label className="block  text-gray-700 text-lg font-bold " htmlFor="title">Nombre del producto</label>
                <input
                    type="text"
                    name="title"
                    // placeholder="Titulo del producto"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    value={title}
                    onChange={handleChange}
                />
                <label className="block  text-gray-700 text-lg font-bold " htmlFor="description">Descripcion del producto</label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    // placeholder="Descripcion del producto"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
                />
                <label className="block  text-gray-700 text-lg font-bold " htmlFor="cantidad">Stock del producto</label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    // placeholder="Stock del producto"
                    name="cantidad"
                    value={cantidad}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
                />
                <label className="block  text-gray-700 text-lg font-bold " htmlFor="precio">Precio por hora del producto</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    // placeholder="Precio del producto"
                    name="precio"
                    value={precio}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
                />
                <label className="block  text-gray-700 text-lg font-bold " htmlFor="imgMain">Imagen del producto</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    // placeholder="Link de la imagen"
                    name="imgMain"
                    value={imgMain}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
                />
                {/* <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="priority"
                        id="input-check"
                        checked={priority}
                        onChange={handleChange}
                    />
                    <label htmlFor="input-check">Dar Prioridad</label>
                </div> */}
                <label className="block  text-gray-700 text-lg font-bold " htmlFor="category">Categoria del producto</label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="category"
                    value={category}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, state: event.target.value})}
                >
                    <option value="nieve">Nieve</option>
                    <option value="montaña">montaña</option>
                    <option value="agua">Agua</option>
                </select>

                <button
                    type="submit"
                    className="m-5 bg-transparent hover:bg-colorAgua text-colorAgua font-semibold hover:text-white py-3 px-20 border border-colorAgua hover:border-transparent rounde"
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
