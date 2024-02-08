import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const userContextData = {
        users,
        setUsers
    }

    return (
        <UserContext.Provider value={userContextData}>
            {children}
        </UserContext.Provider>
    );
}
export const { Consumer } = UserContext;
