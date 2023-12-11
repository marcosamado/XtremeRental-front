import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FilterProducts = ({ categoria }) => {
    const navigate = useNavigate();
    const [subCategories, setSubCategories] = useState([]);

    const getSubCategories = async () => {
        const res = await fetch('http://localhost:8080/subcategoria');

        if (!res.ok)
            throw {
                status: res.status,
                statusText: 'No Encontrado',
            };

        const data = await res.json();
        setSubCategories(data);
    };

    useEffect(() => {
        getSubCategories();
    }, []);

    const handleSelectCategory = (event) => {
        const { value } = event.target;
        console.log(event.target);

        const selectedSubCategory = subCategories.find(
            (sub) => sub.nombre === value,
        );

        const selectedSubCategoryId = selectedSubCategory.id;

        navigate(`/productos?categoria=${value}&id=${selectedSubCategoryId}`);
    };

    return (
        <div className="flex flex-row justify-end p-2 ">
            <select
                onChange={handleSelectCategory}
                className="text-sm font-bold border border-black rounded-md"
                name="filter"
            >
                <option className="" value="">
                    {categoria ? categoria : 'Filtrar por...'}
                </option>
                {subCategories?.map((sub) => {
                    if (sub.nombre !== categoria) {
                        return (
                            <option key={sub.id} value={sub.nombre}>
                                {sub.nombre}
                            </option>
                        );
                    }
                    return null;
                })}
            </select>
        </div>
    );
};

export default FilterProducts;
