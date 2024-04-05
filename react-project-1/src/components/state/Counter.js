import React from 'react'

export default function Counter() {
    let count = 0;  // local variable (Not a state variable)

    const increment = () => {
        count++;
        console.log(count)
    }

    return <>
        <h2>Count value: {count} </h2>
        <button onClick={increment}>Increment</button>
    </>
}
