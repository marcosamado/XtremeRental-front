import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" flex bg-black h-16 w-full justify-between p-2 align-middle">
      <div className="flex">
        <img src="/logo.png" className=" mr-2" />
        <p className=" text-white self-end text-sm">2023 Extreme Rental</p>
      </div>
      <div className="flex self-center">
        <AiFillFacebook className="" color="white" size={30} />
        <AiOutlineWhatsApp color="white" size={30} className=" ml-2 mr-2" />
        <AiOutlineInstagram color="white" size={30} className=" mr-2" />
        <AiOutlineTwitter color="white" size={30} />
      </div>
    </div>
  );
};

export default Footer;
