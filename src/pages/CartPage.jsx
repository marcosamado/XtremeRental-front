import React, { useState } from 'react';
import { CartProductCard } from '../components/products/CartProductCard';
import { FaRegTrashAlt } from 'react-icons/fa';
import { ConfirmReserveModal } from '../components/products/ConfirmReserveModal';

const CartPage = () => {
    const [reserves, setReserves] = useState(
        JSON.parse(localStorage.getItem('reserves')) || [],
    );

    const precioTotal = reserves.reduce(
        (acumulador, objeto) => acumulador + objeto.precioTotalDias,
        0,
    );

    return (
        <div>
            <h1 className=" text-2xl font-semibold m-4 border-b">Tu carrito</h1>

            {reserves.length !== 0 ? (
                <div className=" max-w-3xl mx-auto border-2">
                    {reserves?.map((product) => (
                        <CartProductCard
                            key={product.id}
                            {...product}
                            setReserves={setReserves}
                        />
                    ))}
                    <div className="flex justify-around md:justify-end flex-col">
                        <h1 className="self-end text-xl font-semibold m-4">
                            Total a pagar: ${precioTotal}
                        </h1>
                        <ConfirmReserveModal
                            setReserves={setReserves}
                            precioTotal={precioTotal}
                            reserves={reserves}
                        />
                    </div>
                </div>
            ) : (
                <h2 className=" m-4 text-lg">
                    Tu carrito esta vacio. Agrega productos para realizar una
                    reserva.
                </h2>
            )}
        </div>
    );
};

export default CartPage;
