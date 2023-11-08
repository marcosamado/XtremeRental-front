import { useLoaderData, useNavigation, useRevalidator } from 'react-router-dom';
import AdminProductCard from '../components/products/AdminProductCard';
import { LoadingSpinner } from '../components/products/LoadingSpinner';

const ManageProductsPage = () => {
    const { data } = useLoaderData();
    const revalidator = useRevalidator();

    const navigation = useNavigation();

    if (navigation.state === 'loading') return <p>Cargado...</p>;

    console.log(revalidator);
    const handleClick = (id) => {
        eliminarProducto(id);
    };

    const eliminarProducto = async (id) => {
        const settings = {
            method: 'DELETE',
        };
        try {
            const res = await fetch(
                `http://localhost:8080/productos/${id}`,
                settings,
            );
            if (!res.ok) {
                // Manejo específico del error si es necesario
                const errorData = await res.json();
                console.error('Error al eliminar producto:', errorData);
                // Puedes lanzar un nuevo error personalizado si es necesario
                throw new Error('Error al eliminar producto');
            }
            revalidator.revalidate();
        } catch (error) {
            // Aquí puedes manejar el error de manera adecuada
            console.log('Error inesperado:', error);
        }
    };

    return (
        <>
            {revalidator.state === 'loading' && (
                <div
                    className={`bg-colorOscuro/80 min-w-full min-h-screen fixed right-0 top-0 transition-all duration-500  px-3 bg-opacity-60 bg-clip-padding backdrop-blur-md max-h-full overflow-scroll py-5`}
                >
                    <div className="absolute top-1/2 right-1/2">
                        <LoadingSpinner />
                    </div>
                </div>
            )}

            <div className="container max-w-3xl mx-auto py-10">
                {data.map((product) => (
                    <AdminProductCard
                        key={product.id}
                        {...product}
                        handleClick={handleClick}
                        revalidator={revalidator}
                    />
                ))}
            </div>
        </>
    );
};

export default ManageProductsPage;
