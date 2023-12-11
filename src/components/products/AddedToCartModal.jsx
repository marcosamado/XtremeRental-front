import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';

export function AddedToCartModal({ isValid }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                {...(isValid && `onClick=${handleOpen}`)}
                type="submit"
                className=" h-8 bg-teal-300 text-xs text-white px-2 py-1 rounded-md text-center"
            >
                agregar al carrito
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogBody>
                    El producto ha sido agregado al carrito.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleOpen}
                    >
                        <span>Aceptar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
