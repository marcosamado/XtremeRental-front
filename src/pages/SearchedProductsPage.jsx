import { ProductCard } from '../components/products/ProductCard';
import { Pagination } from '../components/products/Pagination';
import { useState } from 'react';

const SearchedProductsPage = (searchedProducts) => {
    const [active, setActive] = useState(1);

    //Logica Pagination

    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [pages, setPages] = useState(totalPages);

    const firstIndex = (active - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    return (
        <div className="w-full p-5 md:p-10 bg-gradient-to-r from-red-100 to-sky-100 min-h-screen flex items-center">
            <div className="container flex flex-col justify-between bg-white  mx-auto max-w-3xl min-h-[729px] shadow-2xl shadow-black ">
                <section className="w-full mr-auto ml-auto max-w-3xl rounded-sm bg-white">
                    {searchedProducts
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

export default SearchedProductsPage;
