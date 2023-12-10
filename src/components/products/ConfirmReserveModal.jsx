import React, { useContext } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';
import { ReserveProductCard } from './ReserveProductCard';
import { UserContext } from '../../context/UserContext';

export function ConfirmReserveModal({ reserves, precioTotal }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    // const { datosUser } = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem('user')) || [];

    const payload = {
        precioTotal: precioTotal,
        producto: reserves.map((product) => ({ id: product.id })),
        usuario: { id: user.id, role: user.role },
        fechaAltaAlquiler: reserves[0].fechaDeInicio,
        fechaFinAlquiler: reserves[0].fechaDeDevolucion,
    };

    // console.log(reserves);

    const handleReserva = async () => {
        try {
            console.log('hola');
            console.log(payload);
            const res = await fetch(`http://localhost:8080/alquileres`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                // Crear un objeto de error personalizado con estado y ok
                const error = new Error('Error al reservar');
                error.status = res.status;
                error.ok = false;
                throw error;
            }
            const data = await res.json();
            console.log(data);
        } catch (error) {
            throw new Error('Error al reservar');
        }
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                type="submit"
                className=" self-end h-8 bg-teal-300 text-xs text-white px-2 py-1 rounded-md text-center m-4"
            >
                Confirmar
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    <h2>Confirmar reserva</h2>
                </DialogHeader>
                <DialogBody>
                    <h3 className=" text-xl font-semibold">
                        Datos del Usuario
                    </h3>
                    <div className="flex flex-col gap-2">
                        <span>Nombre: {user.username}</span>
                        <span>Contacto: {user.email}</span>
                        <span className=" text-xl font-semibold">
                            Productos Seleccionados
                        </span>
                    </div>
                    {reserves?.map((product) => (
                        <ReserveProductCard key={product.id} {...product} />
                    ))}
                </DialogBody>
                <DialogFooter className="flex justify-between">
                    <span className="text-xl font-semibold">
                        Total a pagar:
                        <span className="text-colorCalido font-semibold">
                            ${precioTotal}
                        </span>
                    </span>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => {
                            handleReserva();
                            handleOpen();
                        }}
                    >
                        <span>Aceptar y pagar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
