import React from 'react'

function counter() {
    const [count, setCount] = React.useState(0)
    const handleCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div><button onClick={handleCount}>{count}</button></div>
    )
}

export default counter
