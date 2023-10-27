const ProductPictures = ({ data, setCurrentPicture }) => {
    let newProducts = [];
    if (data.images.length > 5) {
        newProducts = data.images.slice(0, 5);
    } else {
        newProducts = data.images;
    }

    const handleMouseEnter = (index) => {
        setCurrentPicture(index);
        console.log(index);
    };

    return (
        <div className="flex flex-col gap-2 p-3">
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
                        src={picture.path}
                        alt={`image-for-picture-${picture.id}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductPictures;
