import { useLoaderData, useNavigation } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';
import { Pagination } from '../components/products/Pagination';
import { useState } from 'react';

const ProductsPage = () => {
    const { data } = useLoaderData();
    const navigation = useNavigation();

    //Logica Pagination
    const totalPages = Math.ceil(data.length / 5);
    const [pages, setPages] = useState(totalPages);
    const [active, setActive] = useState(1);
    // console.log(active);
    // console.log(pages);

    const lastIndex = active * pages;
    const firstIndex = lastIndex - pages;

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    return (
        <div className="w-full p-5 bg-gradient-to-r from-red-100 to-sky-100 min-h-screen flex flex-col justify-between">
            <section className="w-full mr-auto ml-auto max-w-3xl rounded-sm bg-white">
                {data
                    .map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                    .slice(firstIndex, lastIndex)}
            </section>
            <section>
                <div className="flex justify-center">
                    <Pagination
                        pages={pages}
                        active={active}
                        setActive={setActive}
                    />
                </div>
            </section>
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
