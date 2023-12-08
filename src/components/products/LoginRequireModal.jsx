import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from '@material-tailwind/react';

export function LoginRequireModal() {
    return (
        <Popover>
            <PopoverHandler>
                <Button className="w-20 h-8 bg-colorCalido text-xs text-white px-2 py-1 rounded-md">
                    Reservar
                </Button>
            </PopoverHandler>
            <PopoverContent>
                Debes estar logueado para poder realizar reservas.
            </PopoverContent>
        </Popover>
    );
}
