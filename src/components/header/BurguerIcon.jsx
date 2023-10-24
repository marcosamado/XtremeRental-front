const BurguerIcon = ({ openNavbar }) => {
    return (
        <>
            <span
                className={`${
                    openNavbar &&
                    "rotate-45 translate-x-[3px] translate-y-[-3px]  origin-left"
                } w-8 h-1 bg-white mb-[4px] rounded-sm  transition-all duration-300  `}
            ></span>
            <span
                className={`${
                    openNavbar && "hidden"
                } w-8 h-1 bg-white mb-[4px] rounded-sm transition-all duration-300  `}
            ></span>
            <span
                className={`${
                    openNavbar &&
                    "rotate-[-45deg] translate-x-[-2px] translate-y-[0px] origin-center"
                } w-8 h-1 bg-white mb-[5px] rounded-sm transition-all duration-300  `}
            ></span>
        </>
    );
};

export default BurguerIcon;
