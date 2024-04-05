import React, { useEffect, useState } from 'react'

export default function Counter_With_State() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1); //state update is asynchrounous
    }
    // pre-defined method / hook
    useEffect(() => {
        console.log(count); // this gets called when the counter value is updated
    })

    return <>
        <h2>Count value: {count} </h2>
        <button onClick={increment}>Increment</button>
    </>
}
