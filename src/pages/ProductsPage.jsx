import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';

const ProductsPage = () => {
    const { data } = useLoaderData();
    const navigation = useNavigation();
    console.log(navigation.state);

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    return (
        <div className="w-full p-5 bg-gradient-to-r from-red-100 to-sky-100">
            <section className="container mr-auto ml-auto max-w-3xl rounded-sm bg-white">
                {data.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </section>
        </div>
    );
};

export const getProducts = async () => {
    const res = await fetch('../src/fakeApi/apiProductos.json');

    if (!res.ok)
        throw {
            status: res.status,
            statusText: 'No Encontrado',
        };

    const data = await res.json();

    return { data };
};

export default ProductsPage;
