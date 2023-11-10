import { createContext, useState } from 'react';

export const UserContext = createContext();

function UserProvider(props) {
    const [authUser, setAuthUser] = useState(false);

    return (
        <UserContext.Provider value={{ authUser, setAuthUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;
