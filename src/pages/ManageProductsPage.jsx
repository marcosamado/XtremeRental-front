import { useLoaderData, useNavigation, useRevalidator } from 'react-router-dom';
import AdminProductCard from '../components/products/AdminProductCard';
import { DeleteProductModal } from '../components/products/deleteProductModal';

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
            <DeleteProductModal />
        </>
    );
};

export default ManageProductsPage;
