import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function HttpDemo5() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState({});

    const increment = () => {
        setUserId(userId + 1);
    }

    const fetchUser = async function () {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`);
        setUser({ ...response.data });
    }
    useEffect(() => {
        fetchUser();
    }, [userId]);

    return <>
        <h2>Http Demo - 5</h2>
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
