import React from 'react'

export default function ProductCard({ product }) {
    let { id, title, price, description, category, image, rating } = product;
    return <div className='col-sm-3 my-1'>
        <div className="card">
            <img src={image} className="card-img-top" height="200px" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{category}</h5>
                <p className="card-text text-truncate">{title}</p>
                <p className="card-text text-truncate">{description}</p>
                <p className="card-text">Price: Rs {price}</p>
                <p className="card-text">Ratings: {rating.rate}</p>
            </div>
        </div>
    </div>
}
