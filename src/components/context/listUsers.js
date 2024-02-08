import React, { useContext } from "react";
import { UserContext } from "./userContext";

const ListUsers = () => {
    const { users } = useContext(UserContext);

    return (
        <>
            <h1>hola</h1>
            {
                users.map((user) => (
                    <lu key={user.id}>
                        <h5>Usuario</h5>
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                    </lu>
                ))
            }
        </>
    );
}

export default ListUsers;