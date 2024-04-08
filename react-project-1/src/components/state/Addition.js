import React, { useState } from 'react'

export default function Addition() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    /* const num1Handler = function (e) {
        setNum1(+e.target.value);
    }
    const num2Handler = function (e) {
        setNum2(+e.target.value);
    } */

    /* const changeHandler = function (e) {
        if (e.target.name === 'num1') {
            setNum1(+e.target.value);
        } else {
            setNum2(+e.target.value);
        }
    }
 */
    return <>
        <input name='num1' onChange={(e) => setNum1(+e.target.value)} /> <br /><br />
        <input name='num2' onChange={(e) => setNum2(+e.target.value)} /> <br /><br />

        <div>Addiition of {num1} & {num2} is {num1 + num2}</div>
        <div>Subtraction of {num1} & {num2} is {num1 - num2}</div>
    </>
}
