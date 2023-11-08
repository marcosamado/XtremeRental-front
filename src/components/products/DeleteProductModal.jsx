import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';
import { useState } from 'react';

export function DeleteProductModal() {
    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);

    return (
        <>
            <div className="mb-3 flex gap-3">
                <Button onClick={() => handleOpen('xs')} variant="gradient">
                    Open Dialog XS
                </Button>
            </div>
            <Dialog open={size === 'xs'} size={'xs'} handler={handleOpen}>
                <DialogHeader>Eliminar - PRODUCTO NOMBRE</DialogHeader>
                <DialogBody>Seguro quieres hacerlo ?</DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => handleOpen(null)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
