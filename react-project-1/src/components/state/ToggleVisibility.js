import React, { useState } from 'react'

export default function ToggleVisibility() {
    const [flag, setFlag] = useState(true);
    const toggleFlag = () => {
        setFlag(!flag);
    }
    return <>
        {flag ? <h1>HI, I am a heading , Click the below button to toggle me</h1> : null}
        <button onClick={toggleFlag}>
            {flag ? 'HIDE' : 'SHOW'}
        </button>
    </>
}
