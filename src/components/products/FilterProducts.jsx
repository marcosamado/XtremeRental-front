import React from 'react';

const FilterProducts = ({ subCategories }) => {
    console.log(subCategories);
    return (
        <div className="flex flex-row justify-end p-2">
            <select
                className="text-sm font-bold border border-black rounded-md"
                name="filter"
            >
                <option className="" defaultValue="">
                    filtrar por...
                </option>
                {subCategories.map((sub) => (
                    <option key={sub.id} value="">
                        {sub.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterProducts;
