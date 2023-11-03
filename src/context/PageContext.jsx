import { createContext, useContext, useState } from 'react';

export const PageContext = createContext();

export const usePageContext = () => {
    return useContext(PageContext);
};

const PageProvider = ({ children }) => {
    const [active, setActive] = useState(1);

    return (
        <PageContext.Provider value={{ active, setActive }}>
            {children}
        </PageContext.Provider>
    );
};

export default PageProvider;
