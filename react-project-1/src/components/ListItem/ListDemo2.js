import React from 'react';
import users from './users.json';

export default function ListDemo2() {
    return <>
        <h1 className='text-center'>Users data in Table</h1>

        <table className='table table-bordered table-striped'>
            <tbody>
                {users.map((user) => {
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.phone}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
