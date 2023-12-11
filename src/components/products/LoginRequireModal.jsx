import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from '@material-tailwind/react';

export function LoginRequireModal({ text, handleOpen }) {
    return (
        <Popover>
            <PopoverHandler>
                <Button
                    className="w-20 h-8 bg-colorCalido text-xs text-white px-2 py-1 rounded-md"
                    onClick={handleOpen}
                >
                    {text}
                </Button>
            </PopoverHandler>
            <PopoverContent>
                Debes estar logueado para poder realizar reservas.
            </PopoverContent>
        </Popover>
    );
}
