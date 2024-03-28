import React from 'react';
import userList from '../ListItem/users.json'
import UserCard from './UserCard';

export default function UserList() {
    return <>
        <div className='container'>
            <div className='row'>
                {userList.map(user => {
                    return <UserCard user={user} />
                })}
            </div>
        </div>
    </>
}
