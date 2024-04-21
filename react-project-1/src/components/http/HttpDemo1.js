import React, { useState } from 'react'

export default function HttpDemo1() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async function () {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const finalResponse = await response.json();
        setUsers(finalResponse);
        setIsLoading(false);
    }
    return <>
        <button onClick={fetchUsers}>Fetch Data</button>
        {
            isLoading ? <h1>Loading....</h1> :
                <table className='table table-bordered'>
                    <tbody>
                        {users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        })}
                    </tbody>
                </table>}
    </>
}
