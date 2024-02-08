import React, { useRef } from "react";

const UseRef = () => {
    const inputValue = useRef();

    const handleSubmit = () => {
        alert(inputValue.current.value);
    }

    return ( 
        <>
        <input type='text' ref={inputValue}></input>
        <button onClick={handleSubmit}>useRef</button>
        </>
     );
}
 
export default UseRef;