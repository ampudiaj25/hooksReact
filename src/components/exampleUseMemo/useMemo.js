import { useMemo } from "react";

const UseMemo = () => {

    const sum = (a, b) => {
        return a + b;
    }

    const state = true;
    const sumMemo = useMemo(() => (sum(3, 3)), state);

    return (
        <>
            <p>{sumMemo}</p>
        </>
    );
}

export default UseMemo;
