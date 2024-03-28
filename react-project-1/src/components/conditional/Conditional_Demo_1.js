import React from 'react'

export default function Conditional_Demo_1() {
    let num = 5;
    /* if (n % 2 === 0) {
        return <h1>This is Even Number</h1>
    } else {
        return <h1>This is Odd Number</h1>
    } */

    // return n % 2 === 0 ? <h1>This is Even Number</h1> : <h1>This is Odd Number</h1>

    return <h2 style={num % 2 === 0 ? { color: "green" } : { color: "red" }}>
        Number {num} is {num % 2 === 0 ? "even" : "odd"}
    </h2>
}
