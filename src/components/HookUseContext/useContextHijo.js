import React, { useContext } from "react";
import { Context } from './hookUseContext';

const UseContextHijo = () => {
    const  user = useContext(Context);

    return (
        <>
            <p>usuarios: {user.user}</p>
            <p>password: {user.password}</p>
        </>
    );
}

export default UseContextHijo;