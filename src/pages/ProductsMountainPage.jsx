import { useLoaderData, useNavigation } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';

const ProductsMountainPage = () => {
    const { data } = useLoaderData();
    const navigation = useNavigation();
    console.log(navigation.state);

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    return (
        <div className="w-full p-5 bg-gray-300 ">
            <section className="container mr-auto ml-auto max-w-full rounded-sm bg-white">
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

export default ProductsMountainPage;
