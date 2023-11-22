import { IconButton, Typography } from '@material-tailwind/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export function Pagination({ pages, active, setActive }) {
    const next = () => {
        if (active === pages) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-8 p-2">
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
                className="bg-white"
            >
                <BiLeftArrowAlt strokeWidth={1} className="h-4 w-4" />
            </IconButton>
            <Typography color="white" className="font-normal">
                Page <strong className="text-white">{active}</strong> of{' '}
                <strong className="text-white">{pages}</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === pages}
                className="bg-white"
            >
                <BiRightArrowAlt strokeWidth={1} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}
