import React, { useState, useMemo, useEffect } from 'react';

const LearnUseMemo = () => {
    const [number, setNumber] = useState(0)
    const [isNight, setIsNight] = useState(false)

    const doubleNumber = useMemo(() => slowFunction(number), [number])
    const themeStyle = useMemo(() => {
        return {
            backgroundColor: isNight ? 'black' : 'green',
            color: 'white',
            fontSize: '20px'
        }
    }, [isNight])

    useEffect(() => {
        console.log("Theme style executed")
    }, [themeStyle])

    return (
        <div style={themeStyle}>
            UseMemo to prevent doubleNumber function to be excuted
            <br />
            <input value={number} onChange={(e) => setNumber(e.target.value)} />
            <br />
            <button onClick={() => setIsNight(prevTheme => !prevTheme)}>
                Change Theme
            </button>
            <div >{doubleNumber}</div>
            <p>Every re-render creates a new reference of all variables, hence react take new reference as new values and </p>
        </div>
    );
}
const slowFunction = (n) => {
    console.log("slow function getting executed.")
    for (let i = 0; i <= 10000000; i++) { }
    return n * 2
}
export default LearnUseMemo;