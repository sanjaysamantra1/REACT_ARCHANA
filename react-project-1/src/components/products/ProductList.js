import React, { useState } from 'react';
import productsArr from './products.json';
import ProductCard from './ProductCard';
import SearchBar from 'react-js-search';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

export default function ProductList() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    const [filteredProducts, setFilteredProducts] = useState(productsArr.slice(itemOffset, endOffset));
    const pageCount = Math.ceil(productsArr.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productsArr.length;
        setItemOffset(newOffset);
        const endOffset = newOffset + itemsPerPage;
        const newDataSet = productsArr.slice(newOffset, endOffset);
        setFilteredProducts([...newDataSet]);
    };

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
            <div className='row'>
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
            <div className='row my-1'>
                {filteredProducts.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
            <div className='row'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>
        </div>
    </>
}
