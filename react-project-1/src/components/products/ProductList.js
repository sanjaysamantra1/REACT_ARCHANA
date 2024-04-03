import React, { useState } from 'react';
import productsArr from './products.json';
import ProductCard from './ProductCard';
import SearchBar from 'react-js-search';

export default function ProductList() {
    const [filteredProducts, setFilteredProducts] = useState(productsArr);

    const onSearchChange = function (term, filteredData) {
        setFilteredProducts(filteredData);
    }
    const sortAsc = function () {
        filteredProducts.sort((a, b) => a.price - b.price);
        setFilteredProducts([...filteredProducts]);
    }
    const sortDesc = function () {
        filteredProducts.sort((a, b) => b.price - a.price);
        setFilteredProducts([...filteredProducts]);
    }
    return <>
        <div className='container'>
            <div className='row my-1'>
                <div className='col-sm-8'>
                    <SearchBar
                        onSearchTextChange={(term, filteredData) => { onSearchChange(term, filteredData) }}
                        // onSearchButtonClick={this.onSearchClick}
                        placeHolderText={"Search here..."}
                        data={productsArr}
                    />
                </div>
                <div className='col-sm-4'>
                    <button onClick={sortAsc} className='btn btn-primary mx-1'>Sort Asc</button>
                    <button onClick={sortDesc} className='btn btn-secondary'>Sort Desc</button>
                </div>
            </div>
            <div className='row'>
                {filteredProducts.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
        </div>
    </>
}
