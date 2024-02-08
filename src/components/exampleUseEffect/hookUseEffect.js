import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        alert('ejecuto useEffect');
    }, [value])
    
    return (
        <>
            <p>{value}</p>
            <button onClick={() => { setValue(value + 1) }}>cambiar estado</button>
        </>
    );
}

export default HookUseEffect;