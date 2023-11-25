import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const UserAvatar = () => {
    const { setAuthUser, setUserAdmin, datosUser, setDatosUser } =
        useContext(UserContext);
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="flex flex-row justify-center items-center gap-2 ">
            <div className="flex flex-col gap-2 justify-center items-center">
                <FaUserCircle className="text-3xl text-white bg-transparent rounded-full" />
                <p className="text-white">{user?.username}</p>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
                <Link to={`/usuario/${user.username.toLowerCase()}`}>
                    <IoMdSettings className="text-white text-3xl" />
                </Link>
                <button
                    onClick={() => {
                        localStorage.removeItem('jwt');
                        localStorage.removeItem('user');
                        setAuthUser(false);
                        setUserAdmin(false);
                        setDatosUser({});
                    }}
                >
                    <LuLogOut className="text-white text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default UserAvatar;
