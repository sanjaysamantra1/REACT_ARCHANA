import React, { useEffect, useState } from 'react';

export default function HttpDemo3() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState({});

    const increment = () => {
        setUserId(userId + 1);
    }

    const fetchUser = async function () {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const finalResponse = await response.json();
        setUser({ ...finalResponse });
    }
    useEffect(() => {
        fetchUser();
    }, [userId]);

    return <>
        <h2>User id : {userId} </h2>
        <button onClick={increment}>Increment</button>

        <div className='col-sm-3 offset-4'>
            <div className="card">
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">id : {user.id}</p>
                    <p className="card-text">{user.username}</p>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.phone}</p>
                    <p className="card-text">{user.address?.city}</p>
                </div>
            </div>
        </div>
    </>
}
