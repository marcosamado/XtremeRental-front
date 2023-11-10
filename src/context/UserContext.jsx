import { createContext, useState } from 'react';

export const UserContext = createContext();

function UserProvider(props) {
    const [authUser, setAuthUser] = useState(false);

    const [datosUser, setDatosUser] = useState({});

    const [userAdmin, setUserAdmin] = useState(false);

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
