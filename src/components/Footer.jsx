import {
    AiFillFacebook,
    AiOutlineWhatsApp,
    AiOutlineInstagram,
    AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="bg-colorOscuro h-32 w-full">
            <div className=" flex justify-between max-w-5xl mx-auto h-full items-center">
                <div className="flex h-28">
                    <img src="/logo.png" className=" mr-2" />
                    <p className=" text-white self-center text-sm">
                        2023 Extreme Rental
                    </p>
                </div>
                <div className="flex self-center">
                    <AiFillFacebook className="" color="white" size={40} />
                    <AiOutlineWhatsApp
                        color="white"
                        size={40}
                        className=" ml-2 mr-2"
                    />
                    <AiOutlineInstagram
                        color="white"
                        size={40}
                        className=" mr-2"
                    />
                    <AiOutlineTwitter color="white" size={40} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
