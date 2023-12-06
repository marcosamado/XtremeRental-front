import { ProductCard } from '../components/products/ProductCard';
import { Pagination } from '../components/products/Pagination';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FilterProducts from '../components/products/filterProducts';

const SearchedProductsPage = () => {
    const { search } = queryString.parse(location.search);
    const { subCategories } = useLoaderData();
    const [active, setActive] = useState(1);
    const [filterSearch, setFilterSearch] = useState([]);

    //Logica Pagination

    // const itemsPerPage = 5;
    // const totalPages = Math.ceil(data.length / itemsPerPage);
    // const [pages, setPages] = useState(totalPages);

    // const firstIndex = (active - 1) * itemsPerPage;
    // const lastIndex = firstIndex + itemsPerPage;

    const getSearch = async (busqueda) => {
        const url = `http://localhost:8080/productos/busqueda/${busqueda}`;
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(url, settings)
            .then((response) => response.json())
            .then((response) => {
                setFilterSearch(response);
                console.log(response);
            });
    };

    useEffect(() => {
        getSearch(search);
    }, [search]);

    return (
        <div className="w-full p-5 md:p-10 bg-gradient-to-r from-red-100 to-sky-100 min-h-screen flex items-center">
            <div className="container flex flex-col bg-white  mx-auto max-w-3xl min-h-[729px] shadow-2xl shadow-black ">
                <FilterProducts subCategories={subCategories} />
                <h1 className="p-5 self-center text-2xl font-bold">
                    BUSQUEDA: {search.toUpperCase()}
                </h1>
                <section className="w-full mr-auto ml-auto max-w-3xl rounded-sm bg-white">
                    {
                        filterSearch?.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                        /*.slice(firstIndex, lastIndex)*/
                    }
                </section>
                {/* <section>
                    <div className="flex flex-col justify-center items-center gap-3 bg-colorOscuro">
                        <Pagination
                            pages={pages}
                            active={active}
                            setActive={setActive}
                        />
                        <button
                            onClick={() => setActive(1)}
                            className="text-white"
                        >
                            Volver
                        </button>
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default SearchedProductsPage;
