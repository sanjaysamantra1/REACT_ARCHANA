import React from 'react'

export default function ListDemo1() {
    let cars = ['Audi', 'Toyota', 'BMW', 'Chevrolet'];
    let countryList = ['India', 'USA', 'Canada', 'Uk'];

    return <>
        <h3>Car List</h3>
        <ol>
            {cars.map((car, ind) => {
                return <li key={ind}>{car}</li>
            })}
        </ol>
        <select>
            {countryList.map((country, ind) => {
                return <option key={ind}>{country}</option>
            })}
        </select>
    </>
}
