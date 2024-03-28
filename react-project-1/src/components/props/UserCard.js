import React from 'react'

export default function UserCard({ user }) {
    let { name, userName, address } = user;
    return <div className='col-sm-3'>
        <div class="card">
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" class="card-img-top" alt="..." />
            <div class="card-body text-center">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{userName}</p>
                <p class="card-text">{address.city}</p>
                <p class="card-text">{address.zip}</p>
                <p class="card-text">{address.geo.lat}</p>
            </div>
        </div>
    </div>
}
