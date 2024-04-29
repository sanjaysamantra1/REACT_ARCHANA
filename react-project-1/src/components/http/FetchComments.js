import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useFetch } from './UseFetch';

export default function FetchComments() {
   let {data,isLoading}  = useFetch('comments')
    return <>
        {
            isLoading ? <h1>Loading....</h1> :
                <table className='table table-bordered'>
                    <tbody>
                        {data.map(comment => {
                            return <tr key={comment.id}>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
        }
    </>
}
