import { createContext, useState } from 'react';

export const UserContext = createContext();

function UserProvider(props) {
    const [authUser, setAuthUser] = useState(false);

    const [datosUser, setDatosUser] = useState(
        localStorage.getItem('user') || {},
    );

    const [userAdmin, setUserAdmin] = useState(true);

    return (
        <UserContext.Provider
            value={{
                authUser,
                setAuthUser,
                datosUser,
                setDatosUser,
                userAdmin,
                setUserAdmin,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;
