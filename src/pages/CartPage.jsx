import React, { useState } from 'react';
import { CartProductCard } from '../components/products/CartProductCard';

const CartPage = () => {
    const [reserve, setReserve] = useState(
        JSON.parse(localStorage.getItem('reserves')),
    );

    console.log(reserve);

    return (
        <div>
            <h1>Carrito</h1>
            {reserve?.map((product) => (
                <CartProductCard
                    key={product.id}
                    {...product}
                    setReserve={setReserve}
                />
            ))}
        </div>
    );
};

export default CartPage;
