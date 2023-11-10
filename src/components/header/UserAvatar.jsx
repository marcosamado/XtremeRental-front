import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';
import { UserContext } from '../../context/UserContext';

const UserAvatar = () => {
    const { setAuthUser } = useContext(UserContext);
    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex flex-col gap-2 justify-center items-center">
                <FaUserCircle className="text-3xl text-white bg-transparent rounded-full" />
                <p className="text-white">UserName</p>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
                <IoMdSettings className="text-white text-3xl" />
                <button onClick={() => setAuthUser(false)}>
                    <LuLogOut className="text-white text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default UserAvatar;
