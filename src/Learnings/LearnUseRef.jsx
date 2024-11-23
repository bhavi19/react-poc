import React, { useState, useRef, useEffect } from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState('Khan')
    // const [renderCount, setRenderCount] = useState(0)
    const renderCount = useRef(0)
    // {current:0}
    const prevName = useRef('')
    const inputRef = useRef()

    const handleFocus = () => {
        inputRef.current.focus()
    }
    useEffect(() => {
        // setRenderCount(prevRenderCount => prevRenderCount + 1)
        renderCount.current = renderCount.current + 1
    })

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <div>
            {/* //focus */}
            <input ref={inputRef} onChange={(e) => { setName(e.target.value) }} />
            <div>My Name is {name}</div>
            {/* //count without re-rendering */}
            <div>Re rendered {renderCount.current} times</div>
            {/* //previous value */}
            <p>My name is {name} but it used to be {prevName.current}</p>
            <button onClick={handleFocus}>Focus</button>
            Ref does not re-render when the value of that state gets changed
            Ref stores previos values | persist between different renders | does not cause re-render
            <br />
            Used when you want to access dom elements - focus
            when ref gets changed, state doesn't get updated
        </div>
    )
}

export default LearnUseRef