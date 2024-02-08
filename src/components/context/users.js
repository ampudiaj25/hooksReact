import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from './userContext';

const Users = () => {
    const { register, handleSubmit } = useForm();
    const {users,setUsers} = useContext(UserContext);

    useEffect(() => {
        console.log('entro', users);
    }, [users])

    const onSubmit = (data) => {
        const newData = {
            id: uuidv4(),
            name: data.name,
            age: data.age
        }
        setUsers(prevUsers => [...prevUsers, newData]);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                    id="name"
                    name="name"
                    {...register('name')}
                />
                <label>Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    {...register('age')}
                />
                <button type="submit" >Send</button>
            </form>
        </>
    );
}

export default Users;