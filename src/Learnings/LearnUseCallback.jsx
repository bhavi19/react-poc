import React, { useCallback, useState,useMemo } from 'react';
import List from './List';

const LearnUseCallback = () => {
    const [number, setNumber] = useState(0)
    const [isNight, setIsNight] = useState(false)
    const theme = {
        backgroundColor: isNight ? 'black' : 'green',
        color: 'white',
        fontSize: '20px'
    }
    const getItems = useCallback((inc) => {
        return [number, number + inc, number + inc]
    },[number])

    return (
        <div style={theme}>
            useCallback used to check referencial eqality of a function 
            useCallback used to check referencial equality of values
            
            <br/>
            useCallback returns a whole function | we can pass parameters
            useMemo returns a function value | can not pass parameters
            <br/>
            <input value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setIsNight(prevTheme => !prevTheme)}>
                Change Theme
            </button>
            <List getItems={getItems} />
        </div>
    )
}
export default LearnUseCallback;