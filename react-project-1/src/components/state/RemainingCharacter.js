import React, { useState } from 'react'

export default function RemainingCharacter() {
    const [remaining, setRemaining] = useState(100);

    const updateRemaining = function (event) {
        const msg = event.target.value;
        setRemaining(100 - msg.length);
    }

    return <>
        <textarea maxLength='100' onKeyUp={updateRemaining} rows='4' cols='30'>
        </textarea>
        <div>Remaining characters: {remaining}</div>
    </>
}
