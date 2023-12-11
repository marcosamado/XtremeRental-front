import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';
import { Pagination } from '../components/products/Pagination';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { FaRegHeart } from 'react-icons/fa';
import FilterProducts from '../components/products/FilterProducts';

const ProductsPage = () => {
    const [active, setActive] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState();

    const { data } = useLoaderData();
    const navigation = useNavigation();
    const { search } = useLocation();
    const { tipo, id = '', categoria = '' } = queryString.parse(search);
    //Logica Pagination
    let filterData = [];
    if (tipo === 'nieve')
        filterData = data.filter((product) => product.categoria === 'nieve');
    if (tipo === 'montaña')
        filterData = data.filter((product) => product.categoria === 'montaña');
    if (tipo === 'acuaticos')
        filterData = data.filter((product) => product.categoria === 'agua');

    const itemsPerPage = 5;
    const totalPages = Math.ceil(filterData.length / itemsPerPage);
    const [pages, setPages] = useState(totalPages);

    const firstIndex = (active - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    const getProductsByCategory = async (id) => {
        const url = `http://localhost:8080/productos/subcategoria/${id}`;
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(url, settings)
            .then((response) => response.json())
            .then((response) => {
                setFilteredProducts(response);
            });
    };

    useEffect(() => {
        if (id) {
            getProductsByCategory(id);
        }
    }, [id]);

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    return (
        <div className="w-full p-5 md:p-10 bg-gradient-to-r from-red-100 to-sky-100 min-h-screen flex items-center">
            <div className="container flex flex-col bg-white  mx-auto max-w-3xl min-h-[729px] shadow-2xl shadow-black ">
                <FilterProducts categoria={categoria} />
                <div className="flex flex-col justify-between min-h-[730px]">
                    <section className="w-full mr-auto ml-auto max-w-3xl rounded-sm bg-white">
                        {!id
                            ? filterData
                                  .map((product) => (
                                      <ProductCard
                                          key={product.id}
                                          {...product}
                                      />
                                  ))
                                  .slice(firstIndex, lastIndex)
                            : filteredProducts?.map((product) => (
                                  <ProductCard key={product.id} {...product} />
                              ))}
                    </section>
                    <section>
                        {!id && (
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
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export const getProducts = async (args) => {
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
