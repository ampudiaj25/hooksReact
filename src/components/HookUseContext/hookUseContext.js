import React, { createContext } from "react";

export const Context = createContext({});

export const Provider = ({ children }) => {
    const users = { user: 'Dairo', password: '123456' };

    return (
        <>
            <Context.Provider value={users}>
                {children}
            </Context.Provider>
            
        </>

    );
}

export const { Consumer } = Context;