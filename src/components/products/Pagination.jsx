import { useState } from 'react';
import { IconButton, Typography } from '@material-tailwind/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export function Pagination({ pages, active, setActive }) {
    const next = () => {
        if (active === pages - 1) return;

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
            >
                <BiLeftArrowAlt strokeWidth={1} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{active}</strong> of{' '}
                <strong className="text-gray-900">{pages - 1}</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === pages - 1}
            >
                <BiRightArrowAlt strokeWidth={1} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}
