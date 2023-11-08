import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';

export function DeleteProductModal({
    handleOpen,
    size,
    id,
    handleClick,
    nombreProducto,
}) {
    return (
        <>
            <Dialog open={size === 'xs'} size={'xs'} handler={handleOpen}>
                <DialogHeader>Eliminar - {nombreProducto}</DialogHeader>
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
                        onClick={() => {
                            handleOpen(null);
                            handleClick(id);
                        }}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
