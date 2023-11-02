import { useState } from 'react';

const AddProductPage = () => {
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

        // if (!title.trim() || !description.trim()) {
        // return setError("hay un errorcito")
        // setDatosForm({
        //     ...datosForm,
        // });
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
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatosForm({
            ...datosForm,
            [name]: value,
        });
    };

    return (
        <div>
            <h1 className="text-center font-bold text-2xl my-4">
                Agregar Producto
            </h1>
            <form
                onSubmit={handleSubmit}
                className="container flex flex-col gap-3 bg-slate-300 max-w-md mx-auto items-center"
            >
                <label htmlFor="title">Nombre del producto</label>
                <input
                    type="text"
                    name="title"
                    // placeholder="Titulo del producto"
                    className="outline-none max-w-xs"
                    value={title}
                    onChange={handleChange}
                />
                <label htmlFor="description">Descripcion del producto</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    // placeholder="Descripcion del producto"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
                />
                <label htmlFor="cantidad">Stock del producto</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    // placeholder="Stock del producto"
                    name="cantidad"
                    value={cantidad}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
                />
                <label htmlFor="precio">Precio por hora del producto</label>
                <input
                    className="form-control mb-3"
                    // placeholder="Precio del producto"
                    name="precio"
                    value={precio}
                    onChange={handleChange}
                    // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
                />
                <label htmlFor="imgMain">Imagen del producto</label>
                <input
                    className="form-control mb-3"
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
                <label htmlFor="category">Categoria del producto</label>
                <select
                    className="form-control mb-3"
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
                    className="w-auto h-auto p-2 bg-colorCalido text-white rounded-md mb-5"
                >
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;
