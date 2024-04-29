import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useFetch } from './UseFetch';

export default function FetchUsers() {
    let {data,isLoading} = useFetch('users')
    return <>
        {
            isLoading ? <h1>Loading....</h1> :
                <table className='table table-bordered'>
                    <tbody>
                        {data.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
        }
    </>
}
