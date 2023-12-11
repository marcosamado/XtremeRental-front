const ProductPictures = ({ setCurrentPicture, data }) => {
    let array = [
        {
            images: [
                {
                    id: 1,
                    path: 'https://universoventura.vteximg.com.br/arquivos/ids/183219-600-600/Tablas-de-Ski-Fischer-RC-One-73-Allride---Fijaciones-RS11-GW-PR-Hombre-Green-A09419.jpg?v=637297590970200000',
                },
                {
                    id: 2,
                    path: 'https://universoventura.vteximg.com.br/arquivos/ids/183220-600-600/Tablas-de-Ski-Fischer-RC-One-73-Allride---Fijaciones-RS11-GW-PR-Hombre-Green-A09419-2.jpg?v=637297591064400000',
                },
                {
                    id: 3,
                    path: 'https://universoventura.vteximg.com.br/arquivos/ids/183221-600-600/Tablas-de-Ski-Fischer-RC-One-73-Allride---Fijaciones-RS11-GW-PR-Hombre-Green-A09419-3.jpg?v=637297591143500000',
                },
                {
                    id: 4,
                    path: 'https://universoventura.vteximg.com.br/arquivos/ids/183221-600-600/Tablas-de-Ski-Fischer-RC-One-73-Allride---Fijaciones-RS11-GW-PR-Hombre-Green-A09419-3.jpg?v=637297591143500000',
                },
                {
                    id: 5,
                    path: 'https://universoventura.vteximg.com.br/arquivos/ids/183221-600-600/Tablas-de-Ski-Fischer-RC-One-73-Allride---Fijaciones-RS11-GW-PR-Hombre-Green-A09419-3.jpg?v=637297591143500000',
                },
            ],
        },
    ];
    // console.log(data.imagenes);

    let newProducts = [];
    if (data.imagenes.length > 5) {
        newProducts = data.imagenes.slice(0, 5);
    } else {
        newProducts = data.imagenes;
    }

    const handleMouseEnter = (index) => {
        setCurrentPicture(index);
        console.log(index);
    };

    return (
        <div className="flex flex-row md:flex-col gap-2 p-3 order-2 md:order-1">
            {newProducts.map((picture, index) => (
                <div
                    onMouseEnter={() => {
                        handleMouseEnter(index);
                    }}
                    key={index}
                    className="cursor-pointer w-14 h-14 overflow-hidden p-1 border-2 rounded-md border-solid border-gray-300 hover:border-blue-700"
                >
                    <img
                        className="w-full h-full object-contain"
                        src={picture.url}
                        alt={`image-for-picture-${picture.id}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductPictures;
