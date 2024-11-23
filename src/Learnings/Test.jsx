import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
    )
}

export default Test;