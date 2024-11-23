import React, { useState } from 'react'
import { MemoizedChildComponent } from "./ChildComponent"

const LearnReactMemo = () => {
    const [count, setCount] = useState(0)
    console.log("Parent")
    return (<div style={{ backgroundColor: "green" }}>
        Parent component
        <br />
        <button onClick={() => setCount((c) => c + 2)}>Count - {count}</button>
        <MemoizedChildComponent />

        React.memo is a higher order function which will prevent re-rendering of child components until changes happen to it's props
        React.memo performs a shallow comparision between new and previous props
    </div>)
}
export default LearnReactMemo