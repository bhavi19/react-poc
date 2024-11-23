import React from 'react'
const ChildComponent = ()=>{
    console.log("Child")
    return(<div>Child component</div>)
}
// export default React.memo(ChildComponent)
export const MemoizedChildComponent = React.memo(ChildComponent);