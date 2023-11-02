import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';
import { Pagination } from '../components/products/Pagination';
import { useState } from 'react';

const ProductsPage = () => {
    const { data } = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();

    //Logica Pagination
    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [pages, setPages] = useState(totalPages);
    const [active, setActive] = useState(1);

    console.log(data.length);
    console.log(pages);

    const firstIndex = (active - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    return (
        <div className="w-full p-5 md:p-0 bg-gradient-to-r from-red-100 to-sky-100 min-h-screen flex items-center">
            <div className="container flex flex-col justify-between bg-white  mx-auto max-w-3xl min-h-[729px] shadow-2xl shadow-black ">
                <section className="w-full mr-auto ml-auto max-w-3xl rounded-sm bg-white">
                    {data
                        .map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                        .slice(firstIndex, lastIndex)}
                </section>
                <section>
                    <div className="flex flex-col justify-center items-center gap-3 bg-colorOscuro">
                        <Pagination
                            pages={pages}
                            active={active}
                            setActive={setActive}
                        />
                        <button
                            // ACA HAY QUE CAMBIAR LA LOGICA CUANDO DIVIDAMOS PRODUCTOS EN CATEGORIAS
                            onClick={() => setActive(1)}
                            className="text-white"
                        >
                            Volver
                        </button>
                    </div>
                </section>
            </div>
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

export default ProductsPage;
