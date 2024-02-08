import React, { useState } from "react";
const HookUseState = () => {
const [count, setCount] = useState(0);
    return (
        <>
        <p>contando {count}</p>
        <button onClick={()=>(setCount(count+1))}>Contar</button>
        </>
    );
}

export default HookUseState;