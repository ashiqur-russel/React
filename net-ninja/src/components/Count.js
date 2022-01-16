import React, { useState } from 'react'

const Count = () => {
    const [counter, setCounter] = useState(0);
    const incrementer = () => {
        setCounter(counter + 1);
        console.log(counter)
    }
    return (
        <div>
            <h1>Counter Component</h1>
            <h2>Counter {counter}</h2>
            <button onClick={() => { incrementer() }} >Click</button>
        </div>
    )
}

export default Count
